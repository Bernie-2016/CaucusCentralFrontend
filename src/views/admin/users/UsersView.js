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
      <div>
        <div className='text-center'>
          <h3> Captains &amp; Organizers</h3>
          <p>
            <Link to='/admin/invitations'>Invitations</Link>
            &nbsp;/&nbsp;
            <Link to='/admin/users/new'>Invite a new user</Link>
            &nbsp;/&nbsp;
            <Link to='/admin/users/import'>Bulk import</Link>
          </p>
        </div>
        <UsersTable {...this.props} />
      </div>
    );
  }
}

reactMixin(UsersView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UsersView);
