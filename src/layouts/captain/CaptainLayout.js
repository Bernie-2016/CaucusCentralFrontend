import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import sessionActions         from 'actions/session';
import CaptainTopNav from 'components/captain/CaptainTopNav';

// Import styles here.
import './Captain.scss';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(sessionActions, dispatch)
});

export class CaptainLayout extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    }
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
            <div>
              <CaptainTopNav signOut={ (e) => this.signOut(e) } {...this.props} />
              { this.props.children }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaptainLayout);
