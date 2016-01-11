import React from 'react';
import SignInForm from './SignInForm';

class SignInFormContainer extends React.Component {

  componentWillMount () {
    this.setState({ email: this.props.session.email });
  }

  onFormSubmit (e) {
    e.preventDefault();
    this.props.actions.signIn({
      email: this.state.email,
      password: this.state.password
    });
  }

  onEmailChange (e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange (e) {
    this.setState({ password: e.target.value });
  }

  render () {
    return (
      <SignInForm
        email={this.state.email}
        onEmailChange={(e) => this.onEmailChange(e) }
        onPasswordChange={(e) => this.onPasswordChange(e) }
        onSubmit={(e) => this.onFormSubmit(e) }
      />
    );
  }
}

export default SignInFormContainer;



