import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import sessionActions         from 'actions/session';
import ResetFormContainer     from 'components/reset/ResetFormContainer';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(sessionActions, dispatch)
});

class ResetView extends React.Component {

  render () {
    return (
      <div className='sign-in'>
        <ResetFormContainer {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetView);
