import React from 'react';
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
    this.props.actions.signUp({
      first_name: this.props.firstName,
      last_name: this.props.lastName,
      email: this.props.email,
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
          <label htmlFor="firstName" className="sr-only">First name</label>
          <input type="text" name="firstName" className="form-control" placeholder="First name" value={this.props.firstName} onChange={ (e) => this.onUpdate(e) } required autofocus />
          <label htmlFor="lastName" className="sr-only">Last name</label>
          <input type="text" name="lastName" className="form-control" placeholder="Last name" value={this.props.lastName} onChange={ (e) => this.onUpdate(e) } required />
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email" value={this.props.email} onChange={ (e) => this.onUpdate(e) } required />
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={ (e) => this.onUpdate(e) } required />
          <label htmlFor="passwordConfirmation" className="sr-only">Password</label>
          <input type="password" name="passwordConfirmation" className="form-control" placeholder="Confirm password" onChange={ (e) => this.onUpdate(e) } required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
