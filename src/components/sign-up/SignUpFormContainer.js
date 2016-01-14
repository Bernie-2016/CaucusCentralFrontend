import React from 'react';
import SignUpForm from './SignUpForm';

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onFormSubmit (e) {
    e.preventDefault();
    let { token } = this.props.params;
    this.props.actions.signUp({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation,
      token: token
    });
  }

  redirectToLoginIfSignedUp () {
    if (this.props.session.created) {
      this.props.history.pushState(null, '/');
    }
  }

  componentWillMount () {
    this.redirectToLoginIfSignedUp();
  }

  componentDidUpdate () {
    this.redirectToLoginIfSignedUp();
  }

  render () {
    return (
      <SignUpForm
        firstName={this.state.firstName} 
        lastName={this.state.lastName} 
        email={this.state.email} 
        password={this.state.password} 
        passwordConfirmation={this.state.passwordConfirmation} 
        onUpdate={ (e) => this.onUpdate(e) }
        onSubmit={ (e) => this.onFormSubmit(e) }
      />
    );
  }
}

export default SignUpFormContainer;
