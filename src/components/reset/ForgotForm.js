import React from 'react';
import './ResetForm.scss';

export class ForgotForm extends React.Component {
  onUpdate(e) {
    this.props.resetActions.setAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    let { token } = this.props.params;
    this.props.resetActions.forgot({
      email: this.props.email
    });
  }

  render () {
    return (
      <div className="reset">
        <form className="form-reset" onSubmit={ (e) => this.onSubmit(e) }>
          <h2 className="form-reset-heading">Reset password</h2>
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email" value={this.props.email} onChange={ (e) => this.onUpdate(e) } required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Reset password</button>
        </form>
      </div>
    );
  }
}

export default ForgotForm;
