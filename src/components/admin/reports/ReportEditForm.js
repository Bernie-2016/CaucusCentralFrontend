import React         from 'react';
import Loader        from 'react-loader';
import { Link }      from 'react-router';
import { phaseText } from 'utils/phaseText';

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
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <p className='back-link'>
            <Link to='#' onClick={this.props.history.goBack}>&laquo; Back</Link>
          </p>
          <h3 className='text-center'>Edit existing report</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="phase">Caucus phase</label>
            <select className="form-control" name="phase" value={this.props.phase} onChange={ (e) => this.onUpdate(e) } >
              <option value="start" key="start">{phaseText('start')}</option>
              <option value="viability" key="viability">{phaseText('viability')}</option>
              <option value="not_viable" key="not_viable">{phaseText('not_viable')}</option>
              <option value="apportionment" key="apportionment">{phaseText('apportionment')}</option>
              <option value="apportioned" key="apportioned">{phaseText('apportioned')}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="attendees">Total attendees</label>
            <input type="number" className="form-control" name="attendees" required={true} value={this.props.attendees} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="sandersSupporters">Bernie Sanders supporters</label>
            <input type="number" className="form-control" name="sandersSupporters" required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="clintonSupporters">Hillary Clinton supporters</label>
            <input type="number" className="form-control" name="clintonSupporters" required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="omalleySupporters">Martin O'Malley supporters</label>
            <input type="number" className="form-control" name="omalleySupporters" required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">Confirm update</button>
        </form>
      </Loader>
    );
  }
}

export default ReportEditForm;
