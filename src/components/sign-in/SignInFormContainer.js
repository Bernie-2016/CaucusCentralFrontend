import React from 'react';
import SignInForm from './SignInForm';

class SignInFormContainer extends React.Component {

  componentWillMount () {
    this.setState({ email: this.props.session.email });
    this.redirectToDashboardIfLoggedIn();
  }

  componentDidUpdate () {
    this.redirectToDashboardIfLoggedIn();
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

  redirectToDashboardIfLoggedIn () {
    if ( this.props.session.id !== undefined ) {
      if ( this.props.session.privilege === 'organizer' ) {
        this.props.history.pushState(null, '/admin');
      } else if ( this.props.session.privilege === 'captain' ) {
        this.props.history.pushState(null, '/captain')
      }
    }
  }

  render () {
    return (
      <SignInForm
        email={this.props.session.email}
        onEmailChange={(e) => this.onEmailChange(e) }
        onPasswordChange={(e) => this.onPasswordChange(e) }
        onSubmit={(e) => this.onFormSubmit(e) }
      />
    );
  }
}

export default SignInFormContainer;



