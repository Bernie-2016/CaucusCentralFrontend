import React                  from 'react';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';

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
      <div>
        <h3 className='text-center'>Sign In</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='email' label='Email' name='email' required={true} value={this.props.email} onChange={ (e) => this.onUpdate(e) } autofocus />
          <Input type='password' label='Password' name='password' required={true} value={this.props.password} onChange={ (e) => this.onUpdate(e) } />

          <div className='text-center'>
            <ButtonInput type='submit' bsStyle='primary' value='Sign In' />
          </div>
        </form>
        <div className='forgot-link text-center'>
          <Link to='/forgot'>Forgot Password?</Link>
        </div>
      </div>
    );
  }
}

export default SignInForm;
