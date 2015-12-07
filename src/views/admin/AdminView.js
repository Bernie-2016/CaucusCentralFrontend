import React                  from 'react';
import { Link }               from 'react-router';

export class AdminView extends React.Component {

  render () {
    return (
      <div className='containr admin-view'>
        {this.props.children}
      </div>
    );
  }
}

export default AdminView;
