import React         from 'react';
import { Link }      from 'react-router';
import Loader        from 'react-loader';
import { phaseText } from 'utils/phaseText';

import './ReportForm.scss';

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

    // Create delegate hash and check validity along the way
    _.forOwn(this.props.supporters, (supporters, candidate) => {
      if(isNaN(supporters)) {
        msg = 'Supporter counts must be a valid number.';
        valid = false;
      }

      total += supporters;
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
    let precincts = [<option key={'blank'} value=''>None</option>];
    for (let i = 0; i < this.props.precincts.length; i++) {
      let id = this.props.precincts[i].id;
      precincts.push(<option key={id} value={id}>{this.props.precincts[i].name}</option>);
    }

    return (
      <div>
        <Loader loaded={this.props.fetched}>
          <form onSubmit={ (e) => this.onSubmit(e) }>
            <h3 className="text-center form-signup-heading">Submit Volunteer Report</h3>
            <hr />

            <div className="form-group">
              <label htmlFor="precinct">Precinct</label>
              <select className="form-control" name="precinctId" value={this.props.precinctId} onChange={ (e) => this.onUpdate(e) }>
                {precincts}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="phase">Caucus Phase</label>
              <select className="form-control" name="phase" value={this.props.phase} onChange={ (e) => this.onUpdate(e) } >
                <option value="start" key="start">{phaseText('start')}</option>
                <option value="viability" key="viability">{phaseText('viability')}</option>
                <option value="not_viable" key="not_viable">{phaseText('not_viable')}</option>
                <option value="apportionment" key="apportionment">{phaseText('apportionment')}</option>
                <option value="apportioned" key="apportioned">{phaseText('apportioned')}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="attendees">Total Attendees</label>
              <input type="number" className="form-control" name="attendees" required={true} value={this.props.attendees} onChange={ (e) => this.onUpdate(e) } />
            </div>

            <div className="form-group">
              <label htmlFor="sandersSupporters">Bernie Sanders Supporters</label>
              <input type="number" className="form-control" name="sandersSupporters" required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
            </div>

            <div className="form-group">
              <label htmlFor="clintonSupporters">Hillary Clinton Supporters</label>
              <input type="number" className="form-control" name="clintonSupporters" required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
            </div>

            <div className="form-group">
              <label htmlFor="omalleySupporters">Martin O'Malley Supporters</label>
              <input type="number" className="form-control" name="omalleySupporters" required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
            </div>

            <p>
              If you found anything abnormal at your caucus, please call our help line number at <Link to='tel:+15152776073'>(515) 277-6073</Link> or let us know at <Link to='mailto:iowa-help@berniesanders.com'>iowa-help@berniesanders.com</Link>.
            </p>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Submit Report</button>
          </form>
        </Loader>
      </div>
    );
  }
}

export default ReportForm;
