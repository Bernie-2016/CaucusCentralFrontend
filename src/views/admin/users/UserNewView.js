import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import { Row, Col }              from 'react-bootstrap';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import UserNewForm               from 'components/admin/users/UserNewForm';

const mapStateToProps = (state) => ({
  created:      state.adminUser.created,
  error:        state.adminUser.error,
  sessionToken: state.session.token,
  precincts:    state.adminPrecincts.precincts,
  user: {
    email:      state.adminUser.newEmail,
    privilege:  state.adminUser.privilege,
    precinctId: state.adminUser.precinctId
  }
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class UserNewView extends React.Component {
  componentDidMount() {
    this.props.adminActions.getAllPrecincts({token: this.props.sessionToken});
  }

  componentWillMount() {
    this.redirectToUsersIfCreated();
  }

  componentDidUpdate () {
    this.redirectToUsersIfCreated();
  }

  redirectToUsersIfCreated () {
    if (this.props.created) {
      this.props.adminActions.resetUser();
      this.props.history.pushState(null, '/admin/users');
    }
  }

  render () {
    return (
      <Row>
        <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12} xsOffset={0}>
          <UserNewForm {...this.props} />
        </Col>
      </Row>
    );
  }
}

reactMixin(UserNewView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UserNewView);
