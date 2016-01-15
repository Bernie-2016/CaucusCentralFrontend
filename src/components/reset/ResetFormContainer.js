import React from 'react';
import ResetForm from './ResetForm';

class ResetFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.actions.reset({
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation,
      token: token
    });
  }

  redirectToLoginIfReset () {
    if (this.props.session.reset) {
      this.props.history.pushState(null, '/');
    }
  }

  componentWillMount () {
    this.redirectToLoginIfReset();
  }

  componentDidUpdate () {
    this.redirectToLoginIfReset();
  }

  render () {
    return (
      <ResetForm
        password={this.state.password} 
        passwordConfirmation={this.state.passwordConfirmation} 
        onUpdate={ (e) => this.onUpdate(e) }
        onSubmit={ (e) => this.onFormSubmit(e) }
      />
    );
  }
}

export default ResetFormContainer;
