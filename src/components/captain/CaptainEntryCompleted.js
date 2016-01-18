import React from 'react';

export class CaptainEntryCompleted extends React.Component {
  totalSupporters() {
    return parseInt(this.props.bernieSupporters) + parseInt(this.props.hillarySupporters) + parseInt(this.props.martinSupporters);
  }

  render() {
    return (
      <div>
        <h4>Completed</h4>
        <p>Caucus has been completed. Thanks for your help!</p>

        <p>Based on the data you entered, this is how delegates will be assigned:</p>

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
      </div>
    );
  }
};

export default CaptainEntryCompleted;
