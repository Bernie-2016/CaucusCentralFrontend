import React from 'react';

export class UsersImportForm extends React.Component {
  render() {
    let precincts = [<option key={'blank'} value=''>None</option>];
    for (let i = 0; i < this.props.adminPrecincts.precincts.length; i++) {
      let id = this.props.adminPrecincts.precincts[i].id;
      precincts.push(<option key={id} value={id}>{this.props.adminPrecincts.precincts[i].name}</option>);
    }

    let message = '';
    if(this.props.users.length > 0) {
      message = <div className='alert alert-success'>{this.props.users.length} user(s) ready for import.</div>
    }

    let submitDisabled = (this.props.users.length === 0);

    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="file">Users CSV</label>
            <input type="file" className="form-control" name="file" required={true} onChange={this.props.onSelect} />
          </div>
          {message}
          <button type="submit" className="btn btn-primary" disabled={submitDisabled}>Import Users</button>
        </form>
      </div>
    );
  }
}

export default UsersImportForm;
