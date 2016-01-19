import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import profileActions            from 'actions/profile';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import ProfileForm               from 'components/profile/ProfileForm';

const mapStateToProps = (state) => ({
  updated:      state.profile.updated,
  sessionToken: state.session.token,
  profile: {
    firstName:            state.profile.firstName,
    lastName:             state.profile.lastName,
    email:                state.profile.email,
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
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <ProfileForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

reactMixin(ProfileEditView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditView);
