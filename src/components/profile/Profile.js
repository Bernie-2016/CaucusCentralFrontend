import React                   from 'react';
import { Link }                from 'react-router';
import { bindActionCreators }  from 'redux';
import { connect }             from 'react-redux';

export class Profile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Profile</h1>
          <p>
            <strong>First name: </strong> {this.props.user.firstName}
          </p>
          <p>
            <strong>Last name: </strong> {this.props.user.lastName}
          </p>
          <p>
            <strong>Email: </strong> {this.props.user.email}
          </p>
          <p>
            <Link to={this.props.location.pathname + '/edit'} className='btn btn-primary'>Edit</Link>
          </p>
        </div>
      </div>
    );
  }
};

export default Profile;
