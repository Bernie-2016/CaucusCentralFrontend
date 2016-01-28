import React                  from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import _                      from 'lodash';
import Papa                   from 'papaparse';

export class UsersImportForm extends React.Component {
  onSelect(e) {
    // Parse CSV into JSON array.
    Papa.parse(e.target.files[0], {
      complete: (results) => {
        let userJson = _.map(results.data, (user) => {
          if(user.length === 4) {
            return {
              code: user[0],
              county: user[1],
              precinct: user[2],
              email: user[3]
            }
          }
        });

        this.props.adminActions.setImportUsers({users: _.compact(userJson)});
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.adminActions.importUsers({
      token: this.props.sessionToken,
      users: this.props.usersToImport
    });
  }

  render() {
    let message = '';
    if(this.props.usersToImport.length > 0) {
      message = <div className='alert alert-success'>{this.props.usersToImport.length} user(s) ready for import.</div>
    }

    return (
      <div>
        <h3 className='text-center'>Bulk import users</h3>
        <hr />
        <p>Upload a CSV with 4 columns and no headers: <br /><strong>State (short code e.g. IA), County Name, Precinct Name, Email</strong></p>
        <form onSubmit={ (e) => this.onSubmit(e) }>
          <Input type='file' label='Users CSV' name='file' required={true} onChange={ (e) => this.onSelect(e) } />
          {message}
          <ButtonInput type='submit' bsStyle='primary' value='Import Users' disabled={this.props.usersToImport.length === 0} />
        </form>
      </div>
    );
  }
}

export default UsersImportForm;
