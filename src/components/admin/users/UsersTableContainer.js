import React                   from 'react';
import { Link }                from 'react-router';
import UsersTable              from './UsersTable';
import adminActions            from 'actions/admin/';
import { bindActionCreators }  from 'redux';
import { connect }             from 'react-redux';

import './UsersTableContainer.scss';

const mapStateToProps = (state) => ({
  users : state.adminUsers.users
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UsersTableContainer extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Link to='/admin/users/new' className='btn btn-primary'>New User</Link>
          <Link to='/admin/users/import' className='btn btn-primary btn-import'>Import Users</Link>
        </p>
        <UsersTable users={this.props.users} dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTableContainer);
