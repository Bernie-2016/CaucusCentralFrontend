import React    from 'react';
import { Link } from 'react-router';
import Loader   from 'react-loader';

export class Profile extends React.Component {
  render() {
    return (
      <Loader loaded={this.props.fetched}>
        <div className='text-center'>
          <h3>
            {this.props.profile.firstName} {this.props.profile.lastName}
          </h3>
          <p>
            {this.props.profile.email}
          </p>
          <p>
            <Link to={'tel:1' + this.props.profile.phoneNumber}>
              {this.props.profile.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
            </Link>
          </p>
          <hr />
          <p>
            <Link to={this.props.location.pathname + '/edit'} className='btn btn-primary btn-lg btn-block'>Edit profile</Link>
          </p>
        </div>
      </Loader>
    );
  }
};

export default Profile;
