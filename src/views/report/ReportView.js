import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import adminActions           from 'actions/admin';
import reportActions          from 'actions/report';
import ReportForm             from 'components/report/ReportForm';

const mapStateToProps = (state) => ({
  created:      state.report.created,
  precinctId:   state.report.precinctId,
  phase:        state.report.phase,
  attendees:    state.report.attendees,
  sessionToken: state.session.token,
  privilege:    state.session.privilege,
  fetched:      state.adminPrecincts.fetched,
  precincts:    state.adminPrecincts.precincts,
  supporters: {
    sanders: state.report.sandersSupporters,
    clinton: state.report.clintonSupporters,
    omalley: state.report.omalleySupporters
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
    if (this.props.created) {
      if(this.props.sessionToken !== undefined) {
        if(this.props.privilege === 'organizer') {
          this.props.history.pushState(null, '/admin');
        } else if (this.props.privilege === 'captain') {
          this.props.history.pushState(null, '/captain')
        }
      }
      this.props.reportActions.reset();
    }
  }

  render () {
    return (
      <div className='sign-in'>
        <ReportForm {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportView);
