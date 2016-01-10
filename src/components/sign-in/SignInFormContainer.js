import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import SignInForm from './SignInForm';
import sessionActions from 'actions/session/';

export class SignInFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.actions.signIn({
      email: this.state.email,
      password: this.state.password
    });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    let credentials = { email: this.state.email, password: this.state.password };
    return <SignInForm 
      credentials={credentials} 
      onEmailChange={(e) => this.onEmailChange(e) } 
      onPasswordChange={(e) => this.onPasswordChange(e) } 
      onSubmit={(e) => this.onFormSubmit(e) } 
    />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(sessionActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer);



