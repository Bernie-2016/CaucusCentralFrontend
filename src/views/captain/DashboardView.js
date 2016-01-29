import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';

import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import captainActions            from 'actions/captain';
import sessionActions            from 'actions/session';
import CaptainEntry              from 'components/captain/CaptainEntry';

const mapStateToProps = (state) => ({
  precinctId:   state.session.precinctId,
  sessionToken: state.session.token,
  fetched:      state.captainPrecinct.fetched,
  name:         state.captainPrecinct.name,
  county:       state.captainPrecinct.county,
  phase:        state.captainPrecinct.phase,
  delegates:    state.captainPrecinct.delegates,
  attendees:    state.captainPrecinct.attendees,
  threshold:    state.captainPrecinct.threshold,
  delegatesWon: state.captainPrecinct.delegatesWon,
  error:        state.captainPrecinct.error,
  viable: {
    sanders: state.captainPrecinct.sandersViable,
    clinton: state.captainPrecinct.clintonViable,
    omalley: state.captainPrecinct.omalleyViable
  },
  supporters: {
    sanders: state.captainPrecinct.sandersSupporters,
    clinton: state.captainPrecinct.clintonSupporters,
    omalley: state.captainPrecinct.omalleySupporters
  }
});

const mapDispatchToProps = (dispatch) => ({
  captainActions: bindActionCreators(captainActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class DashboardView extends React.Component {
  componentDidMount() {
    if(this.props.precinctId !== undefined) {
      this.props.captainActions.getPrecinct({
        id: this.props.precinctId,
        token: this.props.sessionToken
      });
    }
  }

  render() {
    if(this.props.precinctId === undefined || this.props.precinctId === null) {
      return (
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-xs-12 col-xs-offset-0'>
            <h1>Unassigned</h1>
            <p>You are not currently assigned to any precinct.</p>
          </div>
        </div>
      );
    }
    else {
      return (
        <CaptainEntry {...this.props} />
      );
    }
  }
};

reactMixin(CaptainEntry.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
