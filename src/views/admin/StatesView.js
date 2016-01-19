import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import reactMixin                 from 'react-mixin';
import adminActions               from 'actions/admin/';
import sessionActions             from 'actions/session/';
import LogoutIfUnauthorizedMixin  from 'components/mixins/LogoutIfUnauthorizedMixin';
import StatesTable                from 'components/admin/states/StatesTable';

const mapStateToProps = (state) => ({
  gettingStates: state.adminStates.gettingStates,
  states:        state.adminStates.states,
  error:         state.adminStates.error,
  sessionToken:  state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class StatesView extends React.Component {
  componentDidMount() {
    this.props.adminActions.getAllStates({token: this.props.sessionToken});
  }

  render () {
    let message = null;
    if (this.props.gettingStates) {
      message = <div className='alert alert-warning'>Retrieving States</div>;
    }
    return (
      <div className='container admin-dashboard-view'>
        <h1>States</h1>
        {message}
        <StatesTable {...this.props}/>
      </div>
    );
  }
}

reactMixin(StatesView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(StatesView);
