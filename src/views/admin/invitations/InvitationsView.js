import React                     from 'react';
import { Link }                  from 'react-router';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import InvitationsTable          from 'components/admin/invitations/InvitationsTable';

const mapStateToProps = (state) => ({
  fetched:      state.adminInvitation.fetched,
  invitations:  state.adminInvitation.invitations,
  error:        state.adminInvitation.error,
  sessionToken: state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class InvitationsView extends React.Component {
  componentDidMount() {
    this.props.adminActions.getAllInvitations({token: this.props.sessionToken});
  }

  render () {
    return (
      <div>
        <div className='text-center'>
          <h3>Invitations</h3>
          <p>
            <Link to='/admin/invitations'>Invitations</Link>
            &nbsp;/&nbsp;
            <Link to='/admin/users/new'>Invite a new user</Link>
            &nbsp;/&nbsp;
            <Link to='/admin/users/import'>Bulk import</Link>
          </p>
        </div>
        <InvitationsTable {...this.props} />
      </div>
    );
  }
}

reactMixin(InvitationsView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(InvitationsView);
