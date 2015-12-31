import React from 'react';
import UserAdministrationTable from './UserAdministrationTable';
import adminActions from 'actions/admin/';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

export class UserAdministrationTableContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <UserAdministrationTable users={this.props.users} dispatch={this.props.dispatch} />;
  }
}

const mapStateToProps = (state) => ({
  users : state.adminUsers.users
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdministrationTableContainer);



