import React from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import ProfileForm               from 'components/profile/ProfileForm';

export class UsersEditFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingLoad: true,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      precinctId: ''
    }
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    let { id } = this.props.params;
    this.props.actions.updateUser({
      token: this.props.session.token,
      id: id,
      user: {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
        precinct_id: this.state.precinctId
      }
    });
  }

  componentWillMount () {
    this.props.actions.getAllPrecincts({token: this.props.session.token});
    this.redirectToUserIfUpdated();
  }

  componentDidUpdate () {
    if(this.props.adminUser.fetched && this.state.awaitingLoad) {
      this.setState({
        awaitingLoad: false,
        firstName: this.props.adminUser.user.firstName,
        lastName: this.props.adminUser.user.lastName,
        email: this.props.adminUser.user.email,
        precinctId: this.props.adminUser.user.precinctId
      });
    }
    this.redirectToUserIfUpdated();
  }

  redirectToUserIfUpdated () {
    if (this.props.adminUser.updated) {
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Edit User</h1>
          <ProfileForm 
            firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            email={this.state.email} 
            password={this.state.password} 
            passwordConfirmation={this.state.passwordConfirmation} 
            includePrecincts={true} 
            precinctId={this.state.precinctId} 
            onUpdate={ (e) => this.onUpdate(e) } 
            onSubmit={ (e) => this.onSubmit(e) } 
            {...this.props} />
        </div>
      </div>
    );
  }
};

export default UsersEditFormContainer;
