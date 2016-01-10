import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { Link }               from 'react-router';
import { SignInForm }         from 'components/sign-in';
import { signInActions }      from 'actions/sign-in';

const mapStateToProps = (state) => ({
  routerState : state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(signInActions, dispatch)
});

export class SignIn extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object
  };

  render () {
    return (
      <div className='sign-in'>
        <SignInForm {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
