import React                  from 'react';
import { Link }               from 'react-router';

export class AdminView extends React.Component {

  render () {
    return (
      <div className='containr admin-view'>
        <h2>This is the Admin View</h2>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default AdminView;
