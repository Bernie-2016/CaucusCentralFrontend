import React                  from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

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
      <div>
        <h3>Reset Password</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='email' label='Email' name='email' required={true} value={this.props.email} onChange={ (e) => this.onUpdate(e) } />
          
          <ButtonInput type='submit' bsStyle='primary' value='Reset Password' />
        </form>
      </div>
    );
  }
}

export default ForgotForm;
