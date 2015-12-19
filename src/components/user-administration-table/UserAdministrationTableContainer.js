import React from 'react';
import UserAdministrationTable from './UserAdministrationTable';

export class UserAdministrationTableContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users:[
        {
          name:'Joseph Cotton',
          email:'joeycotton@gmail.com',
          type:'Admin',
          precinct:'N/A'
        },
        {
          name:'Orson Welles',
          email:'foiegras4lyfe@msn.com',
          type:'Precinct Captain',
          precinct:'1'
        },
        {
          name:'Dorothy Comingore',
          email:'dorothy.c49@yahoo.com',
          type:'Precinct Captain',
          precinct:'2'
        }
      ]
    };
  }

  render() {
    return <UserAdministrationTable users={this.state.users} />;
  }
}

export default UserAdministrationTableContainer;



