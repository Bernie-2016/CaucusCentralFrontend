import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import resetActions              from 'actions/reset';
import sessionActions            from 'actions/session';
import ResetForm                 from 'components/reset/ResetForm';

const mapStateToProps = (state) => ({
  reset:                state.reset.reset,
  sessionToken:         state.session.token,
  password:             state.reset.password,
  passwordConfirmation: state.reset.passwordConfirmation
});

const mapDispatchToProps = (dispatch) => ({
  resetActions: bindActionCreators(resetActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

class ResetView extends React.Component {
  componentWillMount () {
    this.redirectToLoginIfReset();
  }

  componentDidUpdate () {
    this.redirectToLoginIfReset();
  }

  redirectToLoginIfReset () {
    if (this.props.reset) {
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    return (
      <div className='sign-in'>
        <ResetForm {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetView);
