import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UserAdministrationTableContainer               from 'components/user-administration-table/UserAdministrationTableContainer';
import UserAdministrationFormContainer               from 'components/user-administration-form/UserAdministrationFormContainer';
import adminActions           from 'actions/admin/';


export class AdminUserAdministrationView extends React.Component {

  componentDidMount() {
    this.props.actions.getAllUsers({token: this.props.session.token});
  }

  renderMessage() {
    var message = '';
    if (this.props.adminUsers.getting_users) {
      message = 'Retrieving Users';
    }
    return message;
  }

  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        <div className='message'>{this.renderMessage()}</div>
        <div className='row'>
          <div className='col-lg-8'>
            <UserAdministrationTableContainer users={this.props.adminUsers.users} />
          </div>
          <div className='col-lg-4'>
            <UserAdministrationFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserAdministrationView);
