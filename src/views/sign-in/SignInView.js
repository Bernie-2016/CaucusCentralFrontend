import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import sessionActions            from 'actions/session';
import SignInForm                from 'components/sign-in/SignInForm';

const mapStateToProps = (state) => ({
  created:   state.session.created,
  id:        state.session.id,
  privilege: state.session.privilege,
  email:     state.session.email,
  password:  state.session.password,
});

const mapDispatchToProps = (dispatch) => ({
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

class SignInView extends React.Component {
  componentWillMount () {
    setTimeout(() => {
      this.redirectToDashboardIfLoggedIn();
    });
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.redirectToDashboardIfLoggedIn();
    });
  }

  redirectToDashboardIfLoggedIn () {
    if (this.props.id !== undefined) {
      if (this.props.privilege === 'admin' || this.props.privilege === 'organizer') {
        this.props.history.pushState(null, '/admin');
      } else if (this.props.privilege === 'captain') {
        this.props.history.pushState(null, '/captain')
      }
    }
  }

  render () {
    return (
      <SignInForm {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);
