import React from 'react';

export class UserAdministrationForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <form onSubmit={this.props.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder={this.props.user.name} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder={this.props.user.email} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="" />
      </div>
      <div className="form-group">
        <label htmlFor="typeCaptain" className="radio-inline">
          <input type="radio" name="type" id="typeCaptain" value="captain"/> Precinct Captain
        </label>
        <label htmlFor="typeAdmin" className="radio-inline">
          <input type="radio" name="type" id="typeAdmin" value="admin" /> Admin
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="precinct">Precinct Number</label>
        <select className="form-control" id="precinct" name="precinct">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-default">Add User</button>
    </form>;
  }
}

export default UserAdministrationForm;




