import React from 'react';

export class CaptainEntryAttendees extends React.Component {
  onUpdate(e) {
    this.props.captainActions.setPrecinctAttr({
      key: 'attendees',
      value: parseInt(e.target.value)
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.props.attendees == 0 || isNaN(this.props.attendees)) {
      alert('Attendees must be a valid number greater than 0.');
    }
    else if(confirm('Are you sure you want to report ' + this.props.attendees + ' attendees? This action cannot be undone.')) {
      this.props.captainActions.updateAttendees({
        id: this.props.precinctId,
        token: this.props.sessionToken,
        total_attendees: this.props.attendees
      });
    }
  }

  render() {
    return (
      <div>
        <h4>Tally Attendees</h4>
        <p>First, enter the official attendee count once it is announced at the beginning of your caucus.</p>

        <form onSubmit={ (e) => this.onSubmit(e) }>
          <div className="form-group">
            <label htmlFor="attendees">Total Attendees</label>
            <input type="number" className="form-control" name="attendees" required={true} value={this.props.attendees} onChange={ (e) => this.onUpdate(e) } />
          </div>
          <button type="submit" className="btn btn-primary">Submit Attendees</button>
        </form>
      </div>
    );
  }
};

export default CaptainEntryAttendees;
