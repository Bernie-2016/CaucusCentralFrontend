import React from 'react';
import './ResetForm.scss';

export class ResetForm extends React.Component {
  render () {
    return (
      <div className="container reset">
        <form className="form-reset" onSubmit={this.props.onSubmit}>
          <h2 className="form-reset-heading">Reset password</h2>
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.props.onUpdate} required />
          <label htmlFor="passwordConfirmation" className="sr-only">Password</label>
          <input type="password" name="passwordConfirmation" className="form-control" placeholder="Confirm password" onChange={this.props.onUpdate} required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Reset password</button>
        </form>
      </div>
    );
  }
}

export default ResetForm;
