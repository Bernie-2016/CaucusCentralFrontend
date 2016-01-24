import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import resetActions              from 'actions/reset';
import sessionActions            from 'actions/session';
import ForgotForm                from 'components/reset/ForgotForm';

const mapStateToProps = (state) => ({
  forgot: state.reset.forgot,
  email:  state.reset.email
});

const mapDispatchToProps = (dispatch) => ({
  resetActions: bindActionCreators(resetActions, dispatch)
});

class ForgotView extends React.Component {
  componentWillMount () {
    this.redirectToLoginIfForgot();
  }

  componentDidUpdate () {
    this.redirectToLoginIfForgot();
  }

  redirectToLoginIfForgot () {
    if (this.props.forgot) {
      this.props.resetActions.resetForm();
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    return (
      <ForgotForm {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotView);
