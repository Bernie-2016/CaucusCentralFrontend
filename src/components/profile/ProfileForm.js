import React                  from 'react';
import Loader                 from 'react-loader';
import { Link }               from 'react-router';
import { Input, ButtonInput } from 'react-bootstrap';
import MaskedInput            from 'components/common/MaskedInput';

export class ProfileForm extends React.Component {
  onUpdate(e) {
    this.props.profileActions.setAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.profileActions.updateProfile({
      token: this.props.sessionToken,
      firstName: this.props.profile.firstName,
      lastName: this.props.profile.lastName,
      email: this.props.profile.email,
      phoneNumber: this.props.profile.phoneNumber.replace(/-/g, ''),
      password: this.props.profile.password,
      passwordConfirmation: this.props.profile.passwordConfirmation
    });
  }

  render() {
    return (
      <Loader loaded={this.props.fetched}>
        <p className='back-link'>
          <Link to='/admin/profile'>&laquo; Back</Link>
        </p>
        <h3 className='text-center'>Edit profile</h3>
        <hr />
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='text' label='First Name' name='firstName' required={true} value={this.props.profile.firstName} onChange={ (e) => this.onUpdate(e) } />
          <Input type='text' label='Last Name' name='lastName' required={true} value={this.props.profile.lastName} onChange={ (e) => this.onUpdate(e) } />
          <Input type='email' label='Email' name='email' required={true} value={this.props.profile.email} onChange={ (e) => this.onUpdate(e) } />
          <MaskedInput type='text' label='Phone Number' name='phoneNumber' mask='111-111-1111' value={this.props.profile.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} onChange={ (e) => this.onUpdate(e) } />
          <Input type='password' label='New password' name='password' value={this.props.profile.password} onChange={ (e) => this.onUpdate(e) } help='Leave blank unless you want to change your current one.' />
          <Input type='password' label='Confirm new password' name='passwordConfirmation' value={this.props.profile.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } />

          <ButtonInput type='submit' bsStyle='primary' value='Update Profile' />
        </form>
      </Loader>
    );
  }
}

export default ProfileForm;
