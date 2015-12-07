import React                  from 'react';
import { Link }               from 'react-router';

export class AdminView extends React.Component {

  render () {
    return (
      <div className='containr admin-view'>
        <h1>Welcome to the Admin View</h1>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default AdminView;
