import React                  from 'react';
import { Link }               from 'react-router';

export class AdminUserAdministrationView extends React.Component {

  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        <Link to='/admin'>Dashboard</Link>
      </div>
    );
  }
}

export default AdminUserAdministrationView;
