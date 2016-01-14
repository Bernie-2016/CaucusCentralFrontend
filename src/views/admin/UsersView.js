import React                              from 'react';
import { Link }                           from 'react-router';
import { bindActionCreators }             from 'redux';
import { connect }                        from 'react-redux';
import UsersTableContainer                from 'components/admin/users/UsersTableContainer';
import adminActions                       from 'actions/admin/';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UsersView extends React.Component {
  componentDidMount() {
    this.props.actions.getAllUsers({token: this.props.session.token});
  }

  render () {
    let message = null;
    if (this.props.adminUsers.gettingUsers) {
      message = <div className='alert alert-warning'>Retrieving Users</div>;
    }

    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        {message}
        <div className='row'>
          <div className='col-lg-12'>
            <UsersTableContainer users={this.props.adminUsers.users} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersView);
