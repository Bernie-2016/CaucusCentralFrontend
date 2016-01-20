import React       from 'react';
import MaskedInput from 'react-maskedinput';

import './SignUpForm.scss';

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
      <div className="container signup">
        <form className="form-signup" onSubmit={ (e) => this.onSubmit(e) }>
          <h2 className="form-signup-heading">Sign up</h2>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" className="form-control" placeholder="First name" value={this.props.firstName} onChange={ (e) => this.onUpdate(e) } required autofocus />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" className="form-control" placeholder="Last name" value={this.props.lastName} onChange={ (e) => this.onUpdate(e) } required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control" placeholder="Email" value={this.props.email} onChange={ (e) => this.onUpdate(e) } required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <MaskedInput mask="111-111-1111" className="form-control" name="phoneNumber" value={this.props.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={ (e) => this.onUpdate(e) } required />
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirmation">Password</label>
            <input type="password" name="passwordConfirmation" className="form-control" placeholder="Confirm password" onChange={ (e) => this.onUpdate(e) } required />
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
