import React  from 'react';
import Loader from 'react-loader';

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
      password: this.props.profile.password,
      passwordConfirmation: this.props.profile.passwordConfirmation
    });
  }

  render() {
    return (
      <Loader loaded={this.props.fetched}>
        <h1>Edit Profile</h1>
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
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={this.props.profile.password} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <div className="form-group">
            <label htmlFor="passwordConfirmation">Confirm password</label>
            <input type="password" className="form-control" name="passwordConfirmation" value={this.props.profile.passwordConfirmation} onChange={ (e) => this.onUpdate(e) } />
          </div>

          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      </Loader>
    );
  }
}

export default ProfileForm;
