import React from 'react';
import './SignInForm.scss';

export class SignInForm extends React.Component {
  render () {
    return (
      <div className="container signin">
        <form className="form-signin" onSubmit={this.props.onSubmit}>
          <h2 className="form-signin-heading">Sign in</h2>
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Email" value={this.props.email} onChange={this.props.onEmailChange} required autofocus />
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.props.onPasswordChange} required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
