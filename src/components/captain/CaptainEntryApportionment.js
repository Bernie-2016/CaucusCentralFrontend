import React from 'react';

export class CaptainEntryApportionment extends React.Component {
  totalSupporters() {
    return parseInt(this.props.bernieSupporters) + parseInt(this.props.hillarySupporters) + parseInt(this.props.martinSupporters);
  }

  onSubmit(e) {
    e.preventDefault();
    if(isNaN(this.props.bernieSupporters) || isNaN(this.props.hillarySupporters) || isNaN(this.props.martinSupporters)) {
      alert('Supporter counts must be a valid number.');
    }
    else if(this.totalSupporters() > this.props.captainPrecinct.precinct.total_attendees) {
      alert('Supporter counts cannot total more than ' + this.props.captainPrecinct.precinct.total_attendees + ' (the total number of attendees).')
    }
    else if(confirm('Are you sure you want to finalize these viability supporter counts? This action cannot be undone.')) {
      this.props.actions.updateApportionmentCounts({
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

  render() {
    return (
      <div>
        <h4>Determine apportionment</h4>
        <p>Next, enter the supporters for each candidate in the apportionment phase. When the phase is complete, submit to the campaign.</p>

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
              <td>{ Math.round(this.props.bernieSupporters / this.totalSupporters() * this.props.captainPrecinct.precinct.total_delegates) || 0 }</td>
              <td>{ Math.round(this.props.hillarySupporters / this.totalSupporters() * this.props.captainPrecinct.precinct.total_delegates) || 0 }</td>
              <td>{ Math.round(this.props.martinSupporters / this.totalSupporters() * this.props.captainPrecinct.precinct.total_delegates) || 0 }</td>
            </tr>
          </tbody>
        </table>

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
          <button type="submit" className="btn btn-primary">Submit Viability Phase Supporters</button>
        </form>
      </div>
    );
  }
};

export default CaptainEntryApportionment;
