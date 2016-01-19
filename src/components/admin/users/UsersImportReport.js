import React from 'react';

export class UsersImportReport extends React.Component {
  render() {
    let failedTable = '';
    if(this.props.failedUsers.length > 0) {
      let failedRows = [];
      for(let i = 0; i < this.props.failedUsers.length; i++) {
        let user = this.props.failedUsers[i];
        failedRows.push(
          <tr key={'failed-user-' + i}>
            <td>{user.user.code}</td>
            <td>{user.user.county}</td>
            <td>{user.user.precinct}</td>
            <td>{user.user.email}</td>
            <td>{user.reason}</td>
          </tr>
        );
      }
      failedTable = (
        <div>
          <p>The following {this.props.failedUsers.length} users could not be imported.</p>
          <table className='table'>
            <thead>
              <tr>
                <th>State</th>
                <th>County</th>
                <th>Precinct</th>
                <th>Email</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {failedRows}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div>
        <p>
          <strong>{this.props.importedCount} users imported</strong>
        </p>
        <p>
          {failedTable}
        </p>
      </div>
    );
  }
};

export default UsersImportReport;
