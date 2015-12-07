import React                  from 'react';
import { Link }               from 'react-router';

export class AdminDashboardView extends React.Component {

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h2>Dashboard</h2>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default AdminDashboardView;
