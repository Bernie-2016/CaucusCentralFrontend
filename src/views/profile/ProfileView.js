import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import { Row, Col }              from 'react-bootstrap';
import reactMixin                from 'react-mixin';
import profileActions            from 'actions/profile';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import Profile                   from 'components/profile/Profile';

const mapStateToProps = (state) => ({
  sessionToken: state.session.token,
  fetched:      state.profile.fetched,
  profile: {
    firstName:   state.profile.firstName,
    lastName:    state.profile.lastName,
    email:       state.profile.email,
    phoneNumber: state.profile.phoneNumber || ''
  }
});

const mapDispatchToProps = (dispatch) => ({
  profileActions: bindActionCreators(profileActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class ProfileView extends React.Component {
  componentDidMount() {
    this.props.profileActions.getProfile({
      token: this.props.sessionToken
    });
  }

  render() {
    return (
      <Row>
        <Col md={4} mdOffset={4} sm={8} smOffset={2} xs={12} xsOffset={0}>
          <Profile {...this.props} />
        </Col>
      </Row>
    );
  }
};

reactMixin(ProfileView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
