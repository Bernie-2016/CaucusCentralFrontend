import React                      from 'react';
import { Link }                   from 'react-router';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as adminActions          from 'actions/admin';
import StatesTableContainer       from 'components/admin/states/StatesTableContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class StatesView extends React.Component {
  render () {
    let message = null;
    if (this.props.adminStates.gettingStates) {
      message = <div className='alert alert-warning'>Retrieving States</div>;
    }
    return (
      <div className='container admin-dashboard-view'>
        <h1>States</h1>
        {message}
        <StatesTableContainer {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatesView);