import React    from 'react';
import { Link } from 'react-router';
import Loader   from 'react-loader';

export class Profile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Loader loaded={this.props.fetched}>
            <h1>Profile</h1>
            <p>
              <strong>First name: </strong> {this.props.profile.firstName}
            </p>
            <p>
              <strong>Last name: </strong> {this.props.profile.lastName}
            </p>
            <p>
              <strong>Email: </strong> {this.props.profile.email}
            </p>
            <p>
              <Link to={this.props.location.pathname + '/edit'} className='btn btn-primary'>Edit</Link>
            </p>
          </Loader>
        </div>
      </div>
    );
  }
};

export default Profile;
