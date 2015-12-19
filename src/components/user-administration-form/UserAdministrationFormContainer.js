import React from 'react';
import UserAdministrationForm from './UserAdministrationForm';

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

  render() {
    return <UserAdministrationForm user={this.state.user} />;
  }
}

export default UserAdministrationFormContainer;



