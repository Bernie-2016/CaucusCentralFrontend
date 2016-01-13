import React from 'react';

export class CaptainEntryViability extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    if(isNaN(this.props.bernieSupporters) || isNaN(this.props.hillarySupporters) || isNaN(this.props.martinSupporters)) {
      alert('Supporter counts must be a valid number.');
    }
    else if(this.props.bernieSupporters + this.props.hillarySupporters + this.props.martinSupporters > this.props.captainPrecinct.precinct.total_attendees) {
      alert('Supporter counts cannot total more than ' + this.props.captainPrecinct.precinct.total_attendees + ' (the total number of attendees).')
    }
    else if(confirm('Are you sure you want to finalize these viability supporter counts? This action cannot be undone.')) {
      this.props.actions.updateViabilityCounts({
        id: this.props.session.precinctId,
        token: this.props.session.token,
        delegate_counts: [
          {
            key: 'sanders',
            supporters: this.props.bernieSupporters
          },
          {
            key: 'clinton',
            supporters: this.props.hillarySupporters
          },
          {
            key: 'omalley',
            supporters: this.props.martinSupporters
          }
        ]
      });
    }
  }

  alertClass() {
    if(this.props.bernieSupporters >= this.props.captainPrecinct.precinct.threshold) {
      return 'alert alert-success';
    }
    else {
      return 'alert alert-danger';
    }
  }

  render() {
    return (
      <div>
        <h4>Determine viability</h4>
        <p>Next, enter the supporters for each candidate in the viability phase. When the phase is complete, submit to the campaign.</p>

        <div className={this.alertClass()}>
          Based on current inputs, Bernie has <strong>{this.props.bernieSupporters} supporters</strong> and needs <strong>{this.props.captainPrecinct.precinct.threshold} supporters</strong> to be viable.
        </div>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <div className="form-group">
            <label htmlFor="bernieSupporters">Bernie Sanders Supporters</label>
            <input type="number" className="form-control" name="bernieSupporters" required={true} value={this.props.bernieSupporters} onChange={this.props.onUpdate} />
          </div>
          <div className="form-group">
            <label htmlFor="hillarySupporters">Hillary Clinton Supporters</label>
            <input type="number" className="form-control" name="hillarySupporters" required={true} value={this.props.hillarySupporters} onChange={this.props.onUpdate} />
          </div>
          <div className="form-group">
            <label htmlFor="martinSupporters">Martin O'Malley Supporters</label>
            <input type="number" className="form-control" name="martinSupporters" required={true} value={this.props.martinSupporters} onChange={this.props.onUpdate} />
          </div>
          <button type="submit" className="btn btn-default">Submit Viability Phase Supporters</button>
        </form>
      </div>
    );
  }
};

export default CaptainEntryViability;
