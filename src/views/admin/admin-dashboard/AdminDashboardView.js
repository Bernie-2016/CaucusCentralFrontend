import React                  from 'react';
import { Link }               from 'react-router';
import SVGMapContainer        from 'components/SVGMap/SVGMapContainer';

export class AdminDashboardView extends React.Component {

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>Dashboard</h1>
        <SVGMapContainer />
        <ul className='list-inline'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/admin/user'>User Administration</Link></li>
        </ul>
      </div>
    );
  }
}

export default AdminDashboardView;
