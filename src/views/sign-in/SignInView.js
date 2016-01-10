import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import SignInFormContainer               from 'components/sign-in/SignInFormContainer';
import counterActions         from 'actions/counter';

const mapStateToProps = (state) => ({
  routerState : state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(signInActions, dispatch)
});

const SignIn = React.createClass({
  render: function () {
    return (
      <div className='sign-in'>
        <SignInFormContainer />
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
