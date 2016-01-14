import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import sessionActions         from 'actions/session';
import SignUpFormContainer    from 'components/sign-up/SignUpFormContainer';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(sessionActions, dispatch)
});

class SignUpView extends React.Component {

  render () {
    return (
      <div className='sign-in'>
        <SignUpFormContainer {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
