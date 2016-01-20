import React    from 'react';
import { Link } from 'react-router';
import Loader   from 'react-loader';

export class User extends React.Component {
  removeUser(e) {
    e.preventDefault();
    let { id } = this.props.params;
    if(confirm('Are you sure you want to remove this user? This action cannot be undone.')) {
      this.props.adminActions.removeUser({
        token: this.props.sessionToken,
        id: id
      });
    }
  }

  render() {
    let precinctLink = null;
    if(this.props.user.precinctId !== null) {
      precinctLink = (
        <p>
          <strong>Precinct: </strong>
          <Link to={'/admin/states/' + this.props.user.precinctState + '/precincts/' + this.props.user.precinctId}>
            {this.props.user.precinctName}
          </Link>
        </p>
      );
    }
    return (
      <Loader loaded={this.props.fetched}>
        <Link to={'/admin/users'}>Back to Users</Link>
        <div className="row">
          <div className="col-md-12">
            <h1>User</h1>
            <p>
              <strong>First name: </strong> {this.props.user.firstName}
            </p>
            <p>
              <strong>Last name: </strong> {this.props.user.lastName}
            </p>
            <p>
              <strong>Email: </strong> {this.props.user.email}
            </p>
            {precinctLink}
            <p>
              <Link to={this.props.location.pathname + '/edit'} className='btn btn-primary'>Edit</Link>
            </p>
            <p>
              <Link to='#' className='btn btn-danger' onClick={ (e) => this.removeUser(e) }>Remove User</Link>
            </p>
          </div>
        </div>
      </Loader>
    );
  }
}

export default User;
