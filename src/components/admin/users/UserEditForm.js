import React from 'react';

export class UserEditForm extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setUserAttr({
      key: e.target.name,
      value: e.target.value
    });
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
    let precincts = [<option key={'blank'} value=''>None</option>];
    for (let i = 0; i < this.props.precincts.length; i++) {
      let id = this.props.precincts[i].id;
      precincts.push(<option key={id} value={id}>{this.props.precincts[i].name}</option>);
    }
    let precinctsField = (
      <div className="form-group">
        <label htmlFor="precinct">Precinct</label>
        <select className="form-control" name="precinctId" value={this.props.user.precinctId} onChange={this.props.onUpdate}>
          {precincts}
        </select>
      </div>
    );
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Edit User</h1>
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" className="form-control" name="firstName" required={true} value={this.props.user.firstName} onChange={this.props.onUpdate} />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" className="form-control" name="lastName" required={true} value={this.props.user.lastName} onChange={this.props.onUpdate} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" required={true} value={this.props.user.email} onChange={this.props.onUpdate} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={this.props.user.password} onChange={this.props.onUpdate} />
            </div>

            <div className="form-group">
              <label htmlFor="passwordConfirmation">Confirm password</label>
              <input type="text" className="form-control" name="passwordConfirmation" value={this.props.user.passwordConfirmation} onChange={this.props.onUpdate} />
            </div>

            {precinctsField}

            <button type="submit" className="btn btn-primary">Update Profile</button>
          </form>
        </div>
      </div>
    );
  }
};

export default UserEditForm;
