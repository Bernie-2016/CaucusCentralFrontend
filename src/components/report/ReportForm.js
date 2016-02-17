import React                  from 'react';
import Loader                 from 'react-loader';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';
import { phaseText }          from 'utils/phaseText';
import _                      from 'lodash';

export class ReportForm extends React.Component {
  onUpdate(e) {
    this.props.reportActions.setAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    let delegateCounts = [];
    let total = 0;
    let valid = true;
    let msg = '';

    if(this.props.precinctId === null || this.props.precinctId === 'none') {
      alert('Please select your precinct before submitting the report.');
      return;
    }

    if(this.props.phase === '' || this.props.phase === 'none') {
      alert('Please select the phase before submitting the report.');
      return;
    }

    // Create delegate hash and check validity along the way
    _.forOwn(this.props.supporters, (supporters, candidate) => {
      if(isNaN(supporters)) {
        msg = 'Supporter counts must be a valid number.';
        valid = false;
      }

      total += parseInt(supporters);
      if(total > this.props.attendees) {
        msg = 'Supporter counts cannot total more than ' + this.props.attendees + ' (the total number of attendees).';
        valid = false;
      }

      delegateCounts.push({
        key: candidate,
        supporters: supporters
      });

      if(delegateCounts.length === Object.keys(this.props.supporters).length) {
        if(valid) {
          if(confirm('Are you sure you want to finalize this report? This action cannot be undone.')) {
            this.props.reportActions.create({
              token: this.props.sessionToken,
              precinctId: this.props.precinctId,
              attendees: this.props.attendees,
              phase: this.props.phase,
              delegateCounts: delegateCounts
            });
          }
        }
        else {
          alert(msg);
        }
      }
    });
  }

  render () {
    let counties = [<option key={'none'} value='none'>Select your county...</option>];
    for (let i = 0; i < this.props.counties.length; i++) {
      const county = this.props.counties[i];
      counties.push(<option key={county} value={county}>{_.capitalize(county)}</option>);
    }

    let precincts = [<option key={'none'} value='none'>Select a Precinct...</option>];
    const filteredPrecincts = _.filter(this.props.precincts, { county: this.props.county });
    for (let i = 0; i < filteredPrecincts.length; i++) {
      const id = filteredPrecincts[i].id;
      precincts.push(<option key={id} value={id}>{filteredPrecincts[i].name}</option>);
    }

    return (
      <div>
        <Loader loaded={this.props.fetched}>
          <h3 className="text-center form-signup-heading">Submit Volunteer Report</h3>
          <hr />

          <form onSubmit={ (e) => this.onSubmit(e) }>
            <Input type='select' label='County' name='county' value={this.props.county} onChange={ (e) => this.onUpdate(e) } >
              {counties}
            </Input>
            <div hidden={this.props.county === '' || this.props.county === 'none'}>
              <Input type='select' label='Precinct' name='precinctId' value={this.props.precinctId} onChange={ (e) => this.onUpdate(e) } help="Don't know what precinct you're at? Ask the Bernie 2016 precinct captain or the precinct chair.">
                {precincts}
              </Input>
              <div hidden={this.props.precinctId === '' || this.props.precinctId === 'none'}>
                <Input type='select' label='Report Type' name='phase' value={this.props.phase} onChange={ (e) => this.onUpdate(e) }>
                  <option value='none' key='none'>Select a Type...</option>
                  <option value='viability' key='viability'>Total Attendees</option>
                  <option value='apportionment' key='apportionment'>First Count (Viability)</option>
                  <option value='apportioned' key='apportioned'>Second Count (Realignment)</option>
                </Input>
                <span className='help-block'>
                  Not sure? Read this: <Link to='/report/how' target='_blank'>How to Report</Link>
                </span>
                <div hidden={this.props.phase === 'none' || this.props.phase === ''}>
                  <Input type='number' label='Total attendees' name='attendees' required={true} value={this.props.attendees} onChange={ (e) => this.onUpdate(e) } />
                  <div hidden={this.props.phase === 'viability'}>
                    <Input type='number' label='Bernie Sanders supporters' name='sandersSupporters' required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
                    <Input type='number' label='Hillary Clinton supporters' name='clintonSupporters' required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
                    <Input type='number' label="Martin O'Malley supporters" name='omalleySupporters' required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
                    <Input type='number' label="Uncommitted supporters" name='uncommittedSupporters' required={true} value={this.props.supporters.uncommitted} onChange={ (e) => this.onUpdate(e) } />
                  </div>

                  <p>
                    If you found anything abnormal at your caucus, please call our help line number at <a href='tel:+7029638333'>(702) 963-8333</a>.
                  </p>

                  <ButtonInput type='submit' bsStyle='primary' value='Submit Report' />
                </div>
              </div>
            </div>
          </form>
        </Loader>
      </div>
    );
  }
}

export default ReportForm;
