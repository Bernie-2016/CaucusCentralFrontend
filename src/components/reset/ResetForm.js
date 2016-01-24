import React from 'react';
import './ResetForm.scss';

export class ResetForm extends React.Component {
  onUpdate(e) {
    this.props.resetActions.setAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    if(this.props.password !== this.props.passwordConfirmation) {
      alert('Password and confirmation must match.')
    }
    else {
      let { token } = this.props.params;
      this.props.resetActions.reset({
        token:                 token,
        password:              this.props.password,
        password_confirmation: this.props.passwordConfirmation
      });
    }
  }

  render () {
    return (
      <div className="reset">
        <form className="form-reset" onSubmit={ (e) => this.onSubmit(e) }>
          <h2 className="form-reset-heading">Reset password</h2>
          <label htmlFor="password" className="sr-only">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" value={this.props.password} onChange={ (e) => this.onUpdate(e) } required />
          <label htmlFor="passwordConfirmation" className="sr-only">Password</label>
          <input type="password" name="passwordConfirmation" className="form-control" placeholder="Confirm password" value={this.props.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Reset password</button>
        </form>
      </div>
    );
  }
}

export default ResetForm;
