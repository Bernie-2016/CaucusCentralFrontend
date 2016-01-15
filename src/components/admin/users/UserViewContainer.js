import React                   from 'react';
import { Link }                from 'react-router';
import Profile                 from 'components/profile/Profile';
import adminActions            from 'actions/admin/';
import { bindActionCreators }  from 'redux';
import { connect }             from 'react-redux';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UserViewContainer extends React.Component {
  componentWillMount() {
    let { id } = this.props.params;
    this.props.actions.getUser({
      token: this.props.session.token,
      id: id
    });
    this.redirectToListIfRemoved();
  }

  componentDidUpdate() {
    this.redirectToListIfRemoved();
  }

  removeUser(e) {
    e.preventDefault();
    let { id } = this.props.params;
    if(confirm('Are you sure you want to remove this user? This action cannot be undone.')) {
      this.props.actions.removeUser({
        token: this.props.session.token,
        id: id
      });
    }
  }

  redirectToListIfRemoved () {
    if (this.props.adminUser.removed) {
      this.props.history.pushState(null, '/admin/users');
    }
  }

  render() {
    return (
      <Profile 
        user={this.props.adminUser.user} 
        removeUser={ (e) => this.removeUser(e) } 
        {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserViewContainer);
