import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import _                            from 'lodash';

export class UsersTable extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setUsersAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  render() {
    const keyword = _.lowerCase(this.props.keyword);
    let users = this.props.users;
    if(keyword !== '') {
      users = _.filter(users, (user) => {
        return _.lowerCase(user.firstName).indexOf(keyword) !== -1 ||
               _.lowerCase(user.lastName).indexOf(keyword) !== -1 ||
               _.lowerCase(user.email).indexOf(keyword) !== -1;
      });
    }

    let userComponents = [];
    _.each(users, (user) => {
      userComponents.push(
        <Tr key={user.id}>
          <Td column="lastName">
            <Link to={'/admin/users/' + user.id}>
              {user.last_name}
            </Link>
          </Td>
          <Td column="firstName">
            {user.first_name}
          </Td>
          <Td column="email">
            {user.email}
          </Td>
          <Td column="privilege">
            {_.capitalize(user.privilege)}
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <p>
          <input type="search" name="keyword" placeholder="Keyword" value={this.props.keyword} onChange={ (e) => this.onUpdate(e) } />
        </p>
        <Table className="table table-striped">
          <Thead>
            <Th column="lastName">
              <strong>Last Name</strong>
            </Th>
            <Th column="firstName">
              <strong>First Name</strong>
            </Th>
            <Th column="email">
              <strong>Email</strong>
            </Th>
            <Th column="privilege">
              <strong>Privilege</strong>
            </Th>
          </Thead>
          {userComponents}
        </Table>
      </Loader>
    );
  }
}

export default UsersTable;
