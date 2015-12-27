import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UserAdministrationForm from './UserAdministrationForm';
import adminActions from 'actions/admin/';

export class UserAdministrationFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{
          name:'Joseph Cotton',
          email:'joeycotton@gmail.com',
          type:'Admin',
          precinct:'N/A'
      }
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.actions.add_user({
      name:'Scott Joplin',
      email:'ragtimer@gmail.com',
      type:'Admin',
      precinct:'N/A'
    });
  }

  render() {
    return <UserAdministrationForm user={this.state.user} onSubmit={(e) => this.onFormSubmit(e) } />;
  }
}

const mapStateToProps = (state) => ({
  users : state.adminUsers.users
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdministrationFormContainer);



