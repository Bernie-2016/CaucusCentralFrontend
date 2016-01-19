import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import adminActions              from 'actions/admin/';
import sessionActions            from 'actions/session/';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import UserEditForm              from 'components/admin/users/UserEditForm';

const mapStateToProps = (state) => ({
  updated:      state.adminUser.updated,
  error:        state.adminUser.error,
  sessionToken: state.session.token,
  precincts:    state.adminPrecincts.precincts,
  user: {
    firstName:            state.adminUser.firstName,
    lastName:             state.adminUser.lastName,
    email:                state.adminUser.email,
    password:             state.adminUser.password,
    passwordConfirmation: state.adminUser.passwordConfirmation,
    precinctId:           state.adminUser.precinctId
  }
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class UserEditView extends React.Component {
  componentDidMount() {
    let { id } = this.props.params;
    this.props.adminActions.getUser({
      token: this.props.sessionToken,
      id: id
    });
    this.props.adminActions.getAllPrecincts({token: this.props.sessionToken});
  }

  componentWillMount() {
    this.redirectToUserIfUpdated();
  }

  componentDidUpdate () {
    this.redirectToUserIfUpdated();
  }

  redirectToUserIfUpdated () {
    if (this.props.updated) {
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <UserEditForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

reactMixin(UserEditView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UserEditView);
