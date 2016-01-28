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
        <div>
          <h3 className='text-center'>{this.props.user.firstName} {this.props.user.lastName}</h3>
          <hr />
          <p>
            <strong>First name: </strong> {this.props.user.firstName}
          </p>
          <p>
            <strong>Last name: </strong> {this.props.user.lastName}
          </p>
          <p>
            <strong>Email: </strong>
            <Link to={'mailto:' + this.props.user.email}>
              {this.props.user.email}
            </Link>
          </p>
          <p>
            <strong>Phone number: </strong> 
            <Link to={'tel:1' + this.props.user.phoneNumber}>
              {this.props.user.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
            </Link>
          </p>
          {precinctLink}
          <p>
            <Link to={this.props.location.pathname + '/edit'} className='btn btn-primary'>Edit</Link>
          </p>
          <p>
            <Link to='#' className='btn btn-danger' onClick={ (e) => this.removeUser(e) }>Remove User</Link>
          </p>
        </div>
      </Loader>
    );
  }
}

export default User;
