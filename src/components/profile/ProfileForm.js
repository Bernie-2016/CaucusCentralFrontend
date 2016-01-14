import React from 'react';

export class ProfileForm extends React.Component {
  render() {
    return <form onSubmit={this.props.onSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input type="text" className="form-control" name="firstName" required={true} value={this.props.firstName} onChange={this.props.onUpdate} />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" className="form-control" name="lastName" required={true} value={this.props.lastName} onChange={this.props.onUpdate} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" name="email" required={true} value={this.props.email} onChange={this.props.onUpdate} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" value={this.props.password} onChange={this.props.onUpdate} />
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm password</label>
        <input type="text" className="form-control" name="passwordConfirmation" value={this.props.passwordConfirmation} onChange={this.props.onUpdate} />
      </div>

      <button type="submit" className="btn btn-default">Update Profile</button>
    </form>;
  }
}

export default ProfileForm;
