import React       from 'react';
import Loader      from 'react-loader';
import MaskedInput from 'react-maskedinput';
import { Link }    from 'react-router';

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
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" name="firstName" required={true} value={this.props.profile.firstName} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" name="lastName" required={true} value={this.props.profile.lastName} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" required={true} value={this.props.profile.email} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <MaskedInput mask="111-111-1111" className="form-control" name="phoneNumber" value={this.props.profile.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="password">New password</label>
            <input type="password" className="form-control" name="password" value={this.props.profile.password} onChange={ (e) => this.onUpdate(e) } />
            <small className='help-block'>Leave blank unless you want to change your current one.</small>
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirmation">Confirm new password</label>
            <input type="password" className="form-control" name="passwordConfirmation" value={this.props.profile.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-lg">Update Profile</button>
        </form>
      </Loader>
    );
  }
}

export default ProfileForm;
