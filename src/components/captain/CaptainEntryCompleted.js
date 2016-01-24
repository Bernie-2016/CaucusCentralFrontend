import React from 'react';

export class CaptainEntryCompleted extends React.Component {
  candidateDelegates(candidate) {
    return Math.round(this.props.supporters[candidate] / this.props.attendees * this.props.delegates) || 0;
  }

  render() {
    return (
      <div>
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
              <td>{ this.candidateDelegates('sanders') }</td>
              <td>{ this.candidateDelegates('clinton') }</td>
              <td>{ this.candidateDelegates('omalley') }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default CaptainEntryCompleted;
