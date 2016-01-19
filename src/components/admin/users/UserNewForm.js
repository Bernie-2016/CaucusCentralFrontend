import React from 'react';

export class UserNewForm extends React.Component {
  onUpdate(e) {
    this.props.adminActions.setUserAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.adminActions.createInvitation({
      invitation: {
        email: this.props.user.email,
        privilege: this.props.user.privilege,
        precinct_id: this.props.user.precinctId
      },
      token: this.props.sessionToken
    });
  }

  render() {
    let precincts = [<option key={'blank'} value=''>None</option>];
    for (let i = 0; i < this.props.precincts.length; i++) {
      let id = this.props.precincts[i].id;
      precincts.push(<option key={id} value={id}>{this.props.precincts[i].name}</option>);
    }

    return <form onSubmit={ (e) => this.onSubmit(e) }>
      <h4>Add User</h4>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" name="email" required={true} value={this.props.user.email} onChange={ (e) => this.onUpdate(e) } />
      </div>
      <div className="form-group">
        <label htmlFor="typeCaptain" className="radio-inline">
          <input type="radio" name="privilege" id="typeCaptain" value="captain" checked={this.props.user.privilege == "captain"} onChange={ (e) => this.onUpdate(e) } /> Precinct Captain
        </label>
        <label htmlFor="typeAdmin" className="radio-inline">
          <input type="radio" name="privilege" id="typeAdmin" value="organizer" checked={this.props.user.privilege == "organizer"} onChange={ (e) => this.onUpdate(e) } /> Organizer
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="precinct">Precinct</label>
        <select className="form-control" name="precinctId" value={this.props.user.precinctId} onChange={ (e) => this.onUpdate(e) }>
          {precincts}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>;
  }
}

export default UserNewForm;
