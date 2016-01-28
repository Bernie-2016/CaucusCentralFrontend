import React                  from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import MaskedInput            from 'components/common/MaskedInput';

export class SignUpForm extends React.Component {
  onUpdate(e) {
    this.props.signupActions.setAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    let { token } = this.props.params;
    this.props.signupActions.signUp({
      first_name: this.props.firstName,
      last_name: this.props.lastName,
      email: this.props.email,
      phone_number: this.props.phoneNumber.replace(/-/g, ''),
      password: this.props.password,
      password_confirmation: this.props.passwordConfirmation,
      token: token
    });
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='text' label='First Name' name='firstName' required={true} value={this.props.firstName} onChange={ (e) => this.onUpdate(e) } />
          <Input type='text' label='Last Name' name='lastName' required={true} value={this.props.lastName} onChange={ (e) => this.onUpdate(e) } />
          <Input type='email' label='Email' name='email' required={true} value={this.props.email} onChange={ (e) => this.onUpdate(e) } />
          <MaskedInput type='text' label='Phone Number' name='phoneNumber' mask='111-111-1111' value={this.props.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} onChange={ (e) => this.onUpdate(e) } />
          <Input type='password' label='Password' name='password' required={true} value={this.props.password} onChange={ (e) => this.onUpdate(e) } />
          <Input type='password' label='Confirm password' name='passwordConfirmation' require={true} value={this.props.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Sign Up' />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
