import React                  from 'react';
import { Link }               from 'react-router';
import UserAdministrationTableContainer               from 'components/user-administration-table/UserAdministrationTableContainer';
import UserAdministrationFormContainer               from 'components/user-administration-form/UserAdministrationFormContainer';

export class AdminUserAdministrationView extends React.Component {

  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <UserAdministrationTableContainer />
          </div>
          <div className='col-lg-4'>
            <UserAdministrationFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminUserAdministrationView;
