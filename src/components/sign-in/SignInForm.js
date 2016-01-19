import React from 'react';
import './SignInForm.scss';

export class SignInForm extends React.Component {
  onUpdate(e) {
    this.props.sessionActions.setAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.sessionActions.signIn({
      email:    this.props.email,
      password: this.props.password
    });
  }

  render () {
    return (
      <div className="container signin">
        <form className="form-signin" onSubmit={ (e) => this.onSubmit(e) }>
          <h2 className="form-signin-heading">Sign in</h2>
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email" value={this.props.email} onChange={ (e) => this.onUpdate(e) } required autofocus />
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" value={this.props.password} onChange={ (e) => this.onUpdate(e) } required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
