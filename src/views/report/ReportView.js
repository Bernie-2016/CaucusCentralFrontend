import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import _                      from 'lodash';
import adminActions           from 'actions/admin';
import reportActions          from 'actions/report';
import ReportForm             from 'components/report/ReportForm';

const mapStateToProps = (state) => ({
  created:      state.report.created,
  precinctId:   state.report.precinctId,
  county:       state.report.county,
  phase:        state.report.phase,
  attendees:    state.report.attendees,
  sessionToken: state.session.token,
  privilege:    state.session.privilege,
  fetched:      state.adminPrecincts.fetched,
  counties:     _.uniq(_.map(state.adminPrecincts.precincts, 'county')),
  precincts:    state.adminPrecincts.precincts,
  supporters: {
    sanders: state.report.sandersSupporters,
    clinton: state.report.clintonSupporters,
    omalley: state.report.omalleySupporters,
    uncommitted: state.report.uncommittedSupporters
  },
  wonCounts: {
    sanders: state.report.sandersWon,
    clinton: state.report.clintonWon,
    omalley: state.report.omalleyWon,
    uncommitted: state.report.uncommittedWon
  }
});

const mapDispatchToProps = (dispatch) => ({
  adminActions: bindActionCreators(adminActions, dispatch),
  reportActions: bindActionCreators(reportActions, dispatch)
});

class ReportView extends React.Component {
  componentDidMount() {
    this.props.adminActions.getAllPrecincts({token: this.props.sessionToken});
  }

  componentWillMount () {
    this.resetIfCreated();
  }

  componentDidUpdate () {
    this.resetIfCreated();
  }

  resetIfCreated () {
    if (this.props.created && this.props.phase === 'completed') {
      if(this.props.sessionToken !== undefined) {
        if(this.props.privilege === 'organizer') {
          this.props.history.pushState(null, '/admin');
        } else if (this.props.privilege === 'captain') {
          this.props.history.pushState(null, '/captain')
        }
      }
      else {
        this.props.history.pushState(null, '/');
      }
      this.props.reportActions.reset();
    }
    else if(this.props.created) {
      if(this.props.phase === 'viability') {
        this.props.reportActions.setAttr({key: 'created', value: false});
        this.props.reportActions.setAttr({key: 'phase', value: 'apportionment'});
      }
      else if(this.props.phase === 'apportionment') {
        this.props.reportActions.setAttr({key: 'created', value: false});
        this.props.reportActions.setAttr({key: 'phase', value: 'apportioned'});
      }
      else if(this.props.phase === 'apportioned') {
        this.props.reportActions.setAttr({key: 'created', value: false});
        this.props.reportActions.setAttr({key: 'phase', value: 'completed'});
      }
    }
  }

  render () {
    return (
      <ReportForm {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportView);
