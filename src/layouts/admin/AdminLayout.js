import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as sessionActions    from 'actions/session';
import AdminNav               from 'components/nav/AdminNav';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionActions : bindActionCreators(sessionActions, dispatch)
});

export class AdminLayout extends React.Component {
  componentWillMount() {
    this.redirectToSigninIfLoggedOut();
  }

  componentDidUpdate() {
    this.redirectToSigninIfLoggedOut();
  }

  redirectToSigninIfLoggedOut () {
    if (this.props.session.id == undefined) {
      this.props.history.pushState(null, '/');
    }
  }

  signOut(e) {
    e.preventDefault();
    this.props.sessionActions.signOut({
      token: this.props.session.token
    });
  }

  render () {
    return (
      <div className='container admin-view'>
        <AdminNav signOut={ (e) => this.signOut(e) } {...this.props} />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
