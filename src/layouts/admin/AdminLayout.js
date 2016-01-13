import React                  from 'react';
import AdminNav               from 'components/admin-nav/AdminNav';
import { connect }            from 'react-redux';
import { sessionActions }     from 'actions/session';

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
