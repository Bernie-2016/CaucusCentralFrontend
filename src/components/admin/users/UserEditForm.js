import React from 'react';
import ProfileForm               from 'components/profile/ProfileForm';

export class UserEditForm extends React.Component {
  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.props.adminActions.setUserAttr(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    let { id } = this.props.params;
    this.props.adminActions.updateUser({
      token: this.props.sessionToken,
      id: id,
      user: {
        first_name:            this.props.user.firstName,
        last_name:             this.props.user.lastName,
        email:                 this.props.user.email,
        password:              this.props.user.password,
        password_confirmation: this.props.user.passwordConfirmation,
        precinct_id:           this.props.user.precinctId
      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Edit User</h1>
          <ProfileForm 
            includePrecincts={true} 
            onUpdate={ (e) => this.onUpdate(e) } 
            onSubmit={ (e) => this.onSubmit(e) } 
            {...this.props} />
        </div>
      </div>
    );
  }
};

export default UserEditForm;
