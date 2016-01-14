import React from 'react';

export class UserAdministrationForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let precincts = [<option key={'blank'} value=''>None</option>];
    for (let i = 0; i < this.props.adminPrecincts.precincts.length; i++) {
      let id = this.props.adminPrecincts.precincts[i].id;
      precincts.push(<option key={id} value={id}>{this.props.adminPrecincts.precincts[i].name}</option>);
    }

    return <form onSubmit={this.props.onSubmit}>
      <h4>Add User</h4>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" name="email" required={true} value={this.props.email} onChange={this.props.onUpdate} />
      </div>
      <div className="form-group">
        <label htmlFor="typeCaptain" className="radio-inline">
          <input type="radio" name="privilege" id="typeCaptain" value="captain" checked={this.props.privilege == "captain"} onChange={this.props.onUpdate} /> Precinct Captain
        </label>
        <label htmlFor="typeAdmin" className="radio-inline">
          <input type="radio" name="privilege" id="typeAdmin" value="organizer" checked={this.props.privilege == "organizer"} onChange={this.props.onUpdate} /> Organizer
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="precinct">Precinct</label>
        <select className="form-control" name="precinctId" value={this.props.precinctId} onChange={this.props.onUpdate}>
          {precincts}
        </select>
      </div>
      <button type="submit" className="btn btn-default">Add User</button>
    </form>;
  }
}

export default UserAdministrationForm;




