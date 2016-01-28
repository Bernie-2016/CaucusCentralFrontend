import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import { Row, Col }              from 'react-bootstrap';
import reactMixin                from 'react-mixin';
import profileActions            from 'actions/profile';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import ProfileForm               from 'components/profile/ProfileForm';

const mapStateToProps = (state) => ({
  fetched:      state.profile.fetched,
  updated:      state.profile.updated,
  error:        state.profile.error,
  sessionToken: state.session.token,
  profile: {
    firstName:            state.profile.firstName,
    lastName:             state.profile.lastName,
    email:                state.profile.email,
    phoneNumber:          state.profile.phoneNumber || '',
    password:             state.profile.password,
    passwordConfirmation: state.profile.passwordConfirmation
  }
});

const mapDispatchToProps = (dispatch) => ({
  profileActions: bindActionCreators(profileActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class ProfileEditView extends React.Component {
  componentDidMount() {
    this.props.profileActions.getProfile({
      token: this.props.sessionToken
    });
  }

  componentWillMount () {
    this.redirectToProfileIfUpdated();
  }

  componentDidUpdate () {
    this.redirectToProfileIfUpdated();
  }

  redirectToProfileIfUpdated () {
    if (this.props.updated) {
      this.props.profileActions.reset();
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <Row>
        <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12} xsOffset={0}>
          <ProfileForm {...this.props} />
        </Col>
      </Row>
    );
  }
};

reactMixin(ProfileEditView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditView);
