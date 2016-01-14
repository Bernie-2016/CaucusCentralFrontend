import React from 'react';
import './SignUpForm.scss';

export class SignUpForm extends React.Component {
  render () {
    return (
      <div className="container signup">
        <form className="form-signup" onSubmit={this.props.onSubmit}>
          <h2 className="form-signup-heading">Sign up</h2>
          <label htmlFor="firstName" className="sr-only">First name</label>
          <input type="text" name="firstName" className="form-control" placeholder="First name" value={this.props.firstName} onChange={this.props.onUpdate} required autofocus />
          <label htmlFor="lastName" className="sr-only">Last name</label>
          <input type="text" name="lastName" className="form-control" placeholder="Last name" value={this.props.lastName} onChange={this.props.onUpdate} required />
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email" value={this.props.email} onChange={this.props.onUpdate} required />
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.props.onUpdate} required />
          <label htmlFor="passwordConfirmation" className="sr-only">Password</label>
          <input type="password" name="passwordConfirmation" className="form-control" placeholder="Confirm password" onChange={this.props.onUpdate} required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
