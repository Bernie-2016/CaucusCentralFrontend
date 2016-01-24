import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import resetActions              from 'actions/reset';
import ResetForm                 from 'components/reset/ResetForm';

const mapStateToProps = (state) => ({
  reset:                state.reset.reset,
  password:             state.reset.password,
  passwordConfirmation: state.reset.passwordConfirmation
});

const mapDispatchToProps = (dispatch) => ({
  resetActions: bindActionCreators(resetActions, dispatch)
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
      this.props.resetActions.resetForm();
      this.props.history.pushState(null, '/');
    }
  }

  render () {
    return (
      <ResetForm {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetView);
