import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import _                            from 'lodash';

export class UsersTable extends React.Component {
  userPrecinctLink(user) {
    if(user.precinct_id !== undefined) {
      return (
        <Link to={'/admin/states/' + user.precinct_state + '/precincts/' + user.precinct_id}>
          {user.precinct_name}
        </Link>
      );
    }
    else {
      return (
        <p>N/A</p>
      );
    }
  }

  render() {
    let userComponents = [];
    _.each(this.props.users, (user) => {
      userComponents.push(
        <Tr key={user.id}>
          <Td column="lastName" value={user.last_name}>
            <Link to={'/admin/users/' + user.id}>
              {user.last_name}
            </Link>
          </Td>
          <Td column="firstName" value={user.first_name}>
            {user.first_name}
          </Td>
          <Td column="email">
            {user.email}
          </Td>
          <Td column="privilege">
            {_.capitalize(user.privilege)}
          </Td>
          <Td column="precinct">
            {this.userPrecinctLink(user)}
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <div className="table-responsive">
          <Table className="table table-striped" itemsPerPage={50} filterable={['firstName', 'lastName', 'email']} noDataText='No users found.'>
            <Thead>
              <Th column="lastName">
                <strong>Last</strong>
              </Th>
              <Th column="firstName">
                <strong>First</strong>
              </Th>
              <Th column="email">
                <strong>Email</strong>
              </Th>
              <Th column="privilege">
                <strong>Privilege</strong>
              </Th>
              <Th column="precinct">
                <strong>Precinct</strong>
              </Th>
            </Thead>
            {userComponents}
          </Table>
        </div>
      </Loader>
    );
  }
}

export default UsersTable;
