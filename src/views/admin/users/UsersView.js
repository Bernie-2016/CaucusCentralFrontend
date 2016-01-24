import React                     from 'react';
import { Link }                  from 'react-router';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import UsersTable                from 'components/admin/users/UsersTable';

const mapStateToProps = (state) => ({
  fetched:      state.adminUsers.fetched,
  users:        state.adminUsers.users,
  error:        state.adminUsers.error,
  sessionToken: state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class UsersView extends React.Component {
  componentDidMount() {
    this.props.adminActions.getAllUsers({token: this.props.sessionToken});
  }

  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        <div className='row'>
          <div className='col-lg-12'>
            <p>
              <Link to='/admin/users/new' className='btn btn-primary'>New User</Link>
              <Link to='/admin/users/import' className='btn btn-primary btn-import'>Import Users</Link>
            </p>
            <UsersTable {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

reactMixin(UsersView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UsersView);
