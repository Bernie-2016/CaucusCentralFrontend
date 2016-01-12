import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import sessionActions         from 'actions/session';
import SignInFormContainer    from 'components/sign-in/SignInFormContainer';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(sessionActions, dispatch)
});

class SignInView extends React.Component {

  render () {
    return (
      <div className='sign-in'>
        <SignInFormContainer {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);
