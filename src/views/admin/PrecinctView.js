import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import reactMixin                 from 'react-mixin';
import adminActions               from 'actions/admin/';
import sessionActions             from 'actions/session/';
import LogoutIfUnauthorizedMixin  from 'components/mixins/LogoutIfUnauthorizedMixin';
import Precinct                   from 'components/admin/precincts/Precinct';

const mapStateToProps = (state) => ({
  state:          state.adminState.state,
  name:           state.adminPrecinct.name,
  county:         state.adminPrecinct.county,
  phase:          state.adminPrecinct.phase,
  attendees:      state.adminPrecinct.attendees,
  delegates:      state.adminPrecinct.delegates,
  threshold:      state.adminPrecinct.threshold,
  delegateCounts: state.adminPrecinct.delegateCounts,
  error:          state.adminPrecinct.error,
  sessionToken:   state.session.token,
  supporters: {
    sanders: state.adminPrecinct.sandersSupporters,
    clinton: state.adminPrecinct.clintonSupporters,
    omalley: state.adminPrecinct.omalleySupporters
  }
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class PrecinctView extends React.Component {
  componentDidMount() {
    let { id, code } = this.props.params;
    this.props.adminActions.getPrecinct({id: id, token: this.props.sessionToken});
    this.props.adminActions.getState({code: code, token: this.props.sessionToken});
  }

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <Precinct {...this.props} />
      </div>
    );
  }
}

reactMixin(PrecinctView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctView);
