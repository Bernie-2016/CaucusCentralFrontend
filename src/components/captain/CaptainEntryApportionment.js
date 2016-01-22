import React from 'react';

export class CaptainEntryApportionment extends React.Component {
  candidateDelegates(candidate) {
    return Math.round(this.props.supporters[candidate] / this.props.attendees * this.props.delegates) || 0;
  }

  onUpdate(e) {
    let val = e.target.value;
    if(val === '') {
      val = null;
    }
    else {
      val = parseInt(val);
    }
    this.props.captainActions.setAttr({
      key: e.target.name, 
      value: val
    });
  }

  onSubmit(e) {
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
          if(confirm('Are you sure you want to finalize these delegate apportionment supporter counts? This action cannot be undone.')) {
            this.props.captainActions.updateApportionmentCounts({
              id: this.props.precinctId,
              token: this.props.sessionToken,
              delegate_counts: delegateCounts
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
      <div>
        <h4>SECOND COUNT (determining delegates won)</h4>
        <p><strong>After realignment is over</strong>, enter the final number of supporters for each candidate. When you're done, click submit.</p>

        <p>Based on current data, this is how delegates will be assigned:</p>

        <table className="table">
          <thead>
            <tr>
              <th>Bernie Sanders</th>
              <th>Hillary Clinton</th>
              <th>Martin O'Malley</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ this.candidateDelegates('sanders') }</td>
              <td>{ this.candidateDelegates('clinton') }</td>
              <td>{ this.candidateDelegates('omalley') }</td>
            </tr>
          </tbody>
        </table>

        <form onSubmit={ (e) => this.onSubmit(e) }>
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
          <button type="submit" className="btn btn-primary">Submit final count</button>
        </form>
      </div>
    );
  }
};

export default CaptainEntryApportionment;
