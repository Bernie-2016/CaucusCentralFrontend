import React         from 'react';
import { phaseText } from 'utils/phaseText';

export class ReportNewForm extends React.Component {
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
            let { id } = this.props.params;
            this.props.reportActions.create({
              token: this.props.sessionToken,
              precinctId: id,
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

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={ (e) => this.onSubmit(e) }>
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

            <button type="submit" className="btn btn-primary">Add Report</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReportNewForm;
