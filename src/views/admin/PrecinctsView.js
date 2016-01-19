import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import reactMixin                 from 'react-mixin';
import adminActions               from 'actions/admin/';
import sessionActions             from 'actions/session/';
import LogoutIfUnauthorizedMixin  from 'components/mixins/LogoutIfUnauthorizedMixin';
import PrecinctsSummary           from 'components/admin/precincts/PrecinctsSummary';
import PrecinctsTable             from 'components/admin/precincts/PrecinctsTable';

const mapStateToProps = (state) => ({
  gettingState: state.adminState.gettingState,
  state:        state.adminState.state,
  precincts:    state.adminState.state.precincts,
  error:        state.adminState.error,
  sessionToken: state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class PrecinctsView extends React.Component {
  componentDidMount() {
    let { code } = this.props.params;
    this.props.adminActions.getState({code: code, token: this.props.sessionToken});
  }

  render () {
    let message = null;
    if (this.props.gettingState) {
      message = <div className='alert alert-warning'>Retrieving Precincts</div>;
    }
    return (
      <div className='container admin-dashboard-view'>
        <h1>{this.props.state.name}</h1>
        {message}
        <PrecinctsSummary {...this.props}/>
        <PrecinctsTable {...this.props}/>
      </div>
    );
  }
}

reactMixin(PrecinctsView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctsView);
