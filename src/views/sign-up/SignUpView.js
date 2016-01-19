import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import signupActions          from 'actions/signup';
import SignUpForm             from 'components/sign-up/SignUpForm';

const mapStateToProps = (state) => ({
  created:              state.signup.created,
  firstName:            state.signup.firstName,
  lastName:             state.signup.lastName,
  email:                state.signup.email,
  password:             state.signup.password,
  passwordConfirmation: state.signup.passwordConfirmation
});

const mapDispatchToProps = (dispatch) => ({
  signupActions: bindActionCreators(signupActions, dispatch)
});

class SignUpView extends React.Component {
  componentWillMount () {
    this.redirectToLoginIfSignedUp();
  }

  componentDidUpdate () {
    this.redirectToLoginIfSignedUp();
  }

  redirectToLoginIfSignedUp () {
    if (this.props.created) {
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    return (
      <div className='sign-in'>
        <SignUpForm {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
