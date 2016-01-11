import React from 'react';

export class SignInForm extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' value={this.props.email} onChange={this.props.onEmailChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' className='form-control' id='password' onChange={this.props.onPasswordChange} />
        </div>
        <button type='submit' className='btn btn-default'>Sign In</button>
      </form>
    );
  }
}

export default SignInForm;
