import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import reactMixin                 from 'react-mixin';
import adminActions               from 'actions/admin';
import reportActions              from 'actions/report';
import sessionActions             from 'actions/session';
import LogoutIfUnauthorizedMixin  from 'components/mixins/LogoutIfUnauthorizedMixin';
import Precinct                   from 'components/admin/precincts/Precinct';

const mapStateToProps = (state) => ({
  fetched:        state.adminPrecinct.fetched && state.adminState.fetched,
  error:          state.adminPrecinct.error,
  reportCreated:  state.report.created,
  reportUpdated:  state.report.updated,
  reportRemoved:  state.report.removed,
  state:          state.adminState.state,
  name:           state.adminPrecinct.name,
  county:         state.adminPrecinct.county,
  delegates:      state.adminPrecinct.delegates,
  captainId:      state.adminPrecinct.captainId,
  captainName:    state.adminPrecinct.captainName,
  reports:        state.adminPrecinct.reports,
  error:          state.adminPrecinct.error,
  sessionToken:   state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  reportActions:  bindActionCreators(reportActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class PrecinctView extends React.Component {
  componentDidMount() {
    let { id, code } = this.props.params;
    this.props.adminActions.getPrecinct({id: id, token: this.props.sessionToken});
    this.props.adminActions.getState({code: code, token: this.props.sessionToken});
  }

  componentWillMount() {
    this.reloadReportsIfChanged();
  }

  componentDidUpdate () {
    this.reloadReportsIfChanged();
  }

  reloadReportsIfChanged () {
    if(this.props.reportCreated || this.props.reportUpdated || this.props.reportRemoved) {
      let { id } = this.props.params;
      this.props.adminActions.getPrecinct({id: id, token: this.props.sessionToken});
      this.props.reportActions.reset();
    }
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
