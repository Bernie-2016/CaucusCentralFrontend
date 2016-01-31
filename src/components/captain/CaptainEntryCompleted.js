import React from 'react';

export class CaptainEntryCompleted extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
              <th>Uncommitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ this.props.delegateCounts.sanders }</td>
              <td>{ this.props.delegateCounts.clinton }</td>
              <td>{ this.props.delegateCounts.omalley }</td>
              <td>{ this.props.delegateCounts.uncommitted }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default CaptainEntryCompleted;
