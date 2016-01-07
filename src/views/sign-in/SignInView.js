import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import { SignInForm }         from 'components/sign-in/SignInForm';
import counterActions         from 'actions/counter';

const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});

const SignIn = React.createClass({
  render: function () {
    return (
      <div className='sign-in'>
        <SignInForm {...this.props} />
      </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
