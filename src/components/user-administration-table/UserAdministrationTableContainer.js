import React from 'react';
import UserAdministrationTable from './UserAdministrationTable';

export class UserAdministrationTableContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <UserAdministrationTable users={this.props.users} />;
  }
}

export default UserAdministrationTableContainer;



