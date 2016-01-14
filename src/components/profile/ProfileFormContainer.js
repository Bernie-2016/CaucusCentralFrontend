import React from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import ProfileForm               from './ProfileForm';

export class ProfileFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingLoad: true,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.actions.updateProfile({
      token: this.props.session.token,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    });
  }

  componentWillMount () {
    this.redirectToProfileIfUpdated();
  }

  componentDidUpdate () {
    if(this.props.profile.fetched && this.state.awaitingLoad) {
      this.setState({
        awaitingLoad: false,
        firstName: this.props.profile.firstName,
        lastName: this.props.profile.lastName,
        email: this.props.profile.email
      });
    }
    this.redirectToProfileIfUpdated();
  }

  redirectToProfileIfUpdated () {
    if (this.props.profile.updated) {
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Edit Profile</h1>
          <ProfileForm 
            firstName={this.state.firstName} 
            lastName={this.state.lastName} 
            email={this.state.email} 
            password={this.state.password} 
            passwordConfirmation={this.state.passwordConfirmation} 
            onUpdate={ (e) => this.onUpdate(e) } 
            onSubmit={ (e) => this.onSubmit(e) } 
            {...this.props} />
        </div>
      </div>
    );
  }
};

export default ProfileFormContainer;
