import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import sessionActions         from 'actions/session';
import CaptainNav             from 'components/nav/CaptainNav';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionActions : bindActionCreators(sessionActions, dispatch)
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
          <CaptainNav signOut={ (e) => this.signOut(e) } {...this.props} />
          <div className='content row'>
            <div className='col-md-6 col-md-offset-3 col-xs-12'>
              { this.props.children }
            </div>
          </div>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaptainLayout);
