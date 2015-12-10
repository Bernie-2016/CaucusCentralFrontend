import React                  from 'react';
import { Link }               from 'react-router';

export class AdminNav extends React.Component {

  render () {
    return (
      <nav>
        <ul className='container admin-nav list-inline'>
          <li><Link to='/admin'>Dashboard</Link></li>
          <li><Link to='/admin/user'>User Administration</Link></li>
        </ul>
      </nav>
    );
  }
}

export default AdminNav;

