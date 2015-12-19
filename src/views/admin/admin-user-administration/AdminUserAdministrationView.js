import React                  from 'react';
import { Link }               from 'react-router';
import UserAdministrationTableContainer               from 'components/user-administration-table/UserAdministrationTableContainer';

export class AdminUserAdministrationView extends React.Component {

  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        <UserAdministrationTableContainer />
      </div>
    );
  }
}

export default AdminUserAdministrationView;
