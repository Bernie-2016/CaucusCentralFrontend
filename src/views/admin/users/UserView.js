import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import User                      from 'components/admin/users/User'

const mapStateToProps = (state) => ({
  fetched:      state.adminUser.fetched,
  removed:      state.adminUser.removed,
  error:        state.adminUser.error,
  sessionToken: state.session.token,
  user: {
    firstName:     state.adminUser.firstName,
    lastName:      state.adminUser.lastName,
    email:         state.adminUser.email,
    phoneNumber:   state.adminUser.phoneNumber || '',
    precinctId:    state.adminUser.precinctId,
    precinctName:  state.adminUser.precinctName,
    precinctState: state.adminUser.precinctState
  }
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class UserView extends React.Component {
  componentDidMount() {
    let { id } = this.props.params;
    this.props.adminActions.getUser({
      token: this.props.sessionToken,
      id: id
    });
  }

  compomentWillMount() {
    this.redirectToListIfRemoved();
  }

  componentDidUpdate() {
    this.redirectToListIfRemoved();
  }

  redirectToListIfRemoved () {
    if (this.props.removed) {
      this.props.adminActions.resetUser();
      this.props.history.pushState(null, '/admin/users');
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <User {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

reactMixin(UserView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
