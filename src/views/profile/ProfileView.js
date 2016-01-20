import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
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
    console.log(this.props);
    return (
      <Profile {...this.props} />
    );
  }
};

reactMixin(ProfileView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
