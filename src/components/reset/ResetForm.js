import React                  from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

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
      <div>
        <h3>Reset Password</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='password' label='Password' name='password' required={true} value={this.props.password} onChange={ (e) => this.onUpdate(e) } />
          <Input type='password' label='Confirm password' name='passwordConfirmation' require={true} value={this.props.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Reset Password' />
        </form>
      </div>
    );
  }
}

export default ResetForm;
