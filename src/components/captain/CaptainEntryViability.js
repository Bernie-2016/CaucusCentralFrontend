import React from 'react';

export class CaptainEntryViability extends React.Component {
  onUpdate(e) {
    let val = e.target.value;
    if(val === '') {
      val = null;
    }
    else {
      val = parseInt(val);
    }
    this.props.actions.setSupporters({
      candidate: e.target.name, 
      supporters: val
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let delegateCounts = [];
    let total = 0;
    let valid = true;

    // Create delegate hash and check validity along the way
    _.forOwn(this.props.supporters, (supporters, candidate) => {
      if(isNaN(supporters)) {
        alert('Supporter counts must be a valid number.');
        valid = false;
      }

      total += supporters;
      if(total > this.props.attendees) {
        alert('Supporter counts cannot total more than ' + this.props.attendees + ' (the total number of attendees).');
        valid = false;
      }

      delegateCounts.push({
        key: candidate,
        supporters: supporters
      });

      if(valid && delegateCounts.length === Object.keys(this.props.supporters).length) {
        if(confirm('Are you sure you want to finalize these viability supporter counts? This action cannot be undone.')) {
          this.props.actions.updateViabilityCounts({
            id: this.props.precinct.id,
            token: this.props.sessionToken,
            delegate_counts: delegateCounts
          });
        }
      }
    });
  }

  alertClass() {
    if(this.props.supporters.sanders >= this.props.precinct.threshold) {
      return 'alert alert-success';
    }
    else {
      return 'alert alert-danger';
    }
  }

  render() {
    return (
      <div>
        <h4>FIRST COUNT (determining viability)</h4>
        <p>Enter the supporters for each candidate once the first count is announced. When you're done, click submit. (NOTE: You'll still need to submit a final count in the next step!)</p>

        <div className={this.alertClass()}>
          Based on current inputs, Bernie has <strong>{this.props.supporters.sanders} supporters</strong> and needs <strong>{this.props.precinct.threshold} supporters</strong> to be viable.
        </div>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <div className="form-group">
            <label htmlFor="sanders">Bernie Sanders Supporters</label>
            <input type="number" className="form-control" name="sanders" required={true} value={this.props.supporters.sanders} onChange={ (e) => this.onUpdate(e) } />
          </div>
          <div className="form-group">
            <label htmlFor="clinton">Hillary Clinton Supporters</label>
            <input type="number" className="form-control" name="clinton" required={true} value={this.props.supporters.clinton} onChange={ (e) => this.onUpdate(e) } />
          </div>
          <div className="form-group">
            <label htmlFor="omalley">Martin O'Malley Supporters</label>
            <input type="number" className="form-control" name="omalley" required={true} value={this.props.supporters.omalley} onChange={ (e) => this.onUpdate(e) } />
          </div>
          <button type="submit" className="btn btn-primary">Submit first count</button>
        </form>
      </div>
    );
  }
};

export default CaptainEntryViability;
