import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import { Row, Col }              from 'react-bootstrap';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import UserEditForm              from 'components/admin/users/UserEditForm';

const mapStateToProps = (state) => ({
  fetched:      state.adminUser.fetched && state.adminPrecincts.fetched,
  updated:      state.adminUser.updated,
  error:        state.adminUser.error,
  sessionToken: state.session.token,
  precincts:    state.adminPrecincts.precincts,
  user: {
    firstName:            state.adminUser.firstName,
    lastName:             state.adminUser.lastName,
    email:                state.adminUser.email,
    phoneNumber:          state.adminUser.phoneNumber || '',
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
      this.props.adminActions.resetUser();
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12} xsOffset={0}>
          <UserEditForm {...this.props} />
        </Col>
      </Row>
    );
  }
};

reactMixin(UserEditView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UserEditView);
