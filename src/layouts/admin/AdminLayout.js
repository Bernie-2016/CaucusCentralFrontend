import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as sessionActions    from 'actions/session';
import AdminNav               from 'components/admin/nav/AdminNav';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(sessionActions, dispatch)
});

export class AdminLayout extends React.Component {
  componentWillMount() {
    this.redirectToSigninIfLoggedOut();
  }

  componentDidUpdate() {
    this.redirectToSigninIfLoggedOut();
  }

  redirectToSigninIfLoggedOut () {
    if ( this.props.session.id == undefined ) {
      this.props.history.pushState(null, '/');
    }
  }

  signOut(e) {
    e.preventDefault();
    this.props.actions.signOut({
      token: this.props.session.token
    });
  }

  render () {
    return (
      <div className='container admin-view'>
        <AdminNav signOut={ (e) => this.signOut(e) } {...this.props} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
