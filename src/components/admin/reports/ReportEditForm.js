import React                  from 'react';
import Loader                 from 'react-loader';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';
import { phaseText }          from 'utils/phaseText';

export class ReportEditForm extends React.Component {
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
          let { precinctid, id } = this.props.params;
          this.props.reportActions.update({
            token: this.props.sessionToken,
            precinctId: precinctid,
            id: id,
            attendees: this.props.attendees,
            phase: this.props.phase,
            delegateCounts: delegateCounts
          });
        }
        else {
          alert(msg);
        }
      }
    });
  }

  render() {
    return (
      <Loader loaded={this.props.fetched}>
        <p className='back-link'>
          <Link to='#' onClick={this.props.history.goBack}>&laquo; Back</Link>
        </p>
        <h3 className='text-center'>Edit existing report</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='select' label='Caucus phase' name='phase' value={this.props.phase} onChange={ (e) => this.onUpdate(e) }>
            <option value='viability' key='viability'>{phaseText('viability')}</option>
            <option value='apportionment' key='apportionment'>{phaseText('apportionment')}</option>
            <option value='apportioned' key='apportioned'>{phaseText('apportioned')}</option>
          </Input>
          <Input type='number' label='Total attendees' name='attendees' required={true} value={this.props.attendees} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label='Bernie Sanders supporters' name='sandersSupporters' required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label='Hillary Clinton supporters' name='clintonSupporters' required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Martin O'Malley supporters" name='omalleySupporters' required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
          <Input type='number' label="Uncommitted supporters" name='uncommittedSupporters' required={true} value={this.props.supporters.uncommitted} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Update Report' />
        </form>
      </Loader>
    );
  }
}

export default ReportEditForm;
