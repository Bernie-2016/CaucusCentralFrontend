import React                  from 'react';
import AdminNav               from 'components/admin-nav/AdminNav';

export class AdminView extends React.Component {

  render () {
    return (
      <div className='containr admin-view'>
        <AdminNav />
        {this.props.children}
      </div>
    );
  }
}

export default AdminView;
