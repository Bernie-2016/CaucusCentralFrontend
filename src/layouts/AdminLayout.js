import React                  from 'react';
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
      <div>
        <AdminNav signOut={ (e) => this.signOut(e) } {...this.props} />
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
