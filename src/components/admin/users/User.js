import React    from 'react';
import { Link } from 'react-router';
import Profile  from 'components/profile/Profile';

export class User extends React.Component {
  removeUser(e) {
    e.preventDefault();
    let { id } = this.props.params;
    if(confirm('Are you sure you want to remove this user? This action cannot be undone.')) {
      this.props.actions.removeUser({
        token: this.props.sessionToken,
        id: id
      });
    }
  }

  render() {
    return (
      <div>
        <Link to={'/admin/users'}>Back to Users</Link>
        <Profile removeUser={ (e) => this.removeUser(e) } {...this.props} />
      </div>
    );
  }
}

export default User;
