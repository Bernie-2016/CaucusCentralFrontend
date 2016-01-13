import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UserAdministrationForm from './UserAdministrationForm';
import adminActions from 'actions/admin/';

export class UserAdministrationFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      privilege: 'captain',
      precinctId:''
    };
  }

  componentWillMount() {
    this.props.actions.getAllPrecincts({token: this.props.session.token});
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.actions.createInvitation({
      invitation: {
        email: this.state.email,
        privilege: this.state.privilege,
        precinct_id: this.state.precinctId
      },
      token: this.props.session.token
    });
  }

  render() {
    return <UserAdministrationForm 
      email={this.state.email} 
      privilege={this.state.privilege} 
      precinctId={this.state.precinctId} 
      onUpdate={(e) => this.onUpdate(e) } 
      onSubmit={(e) => this.onFormSubmit(e) } 
      {...this.props} 
    />;
  }
}

const mapStateToProps = (state) => ({
  users : state.adminUsers.users
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAdministrationFormContainer);
