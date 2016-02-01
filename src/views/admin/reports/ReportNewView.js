import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import { Row, Col }              from 'react-bootstrap';
import reportActions             from 'actions/report';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import ReportNewForm             from 'components/admin/reports/ReportNewForm';

const mapStateToProps = (state) => ({
  created:      state.report.created,
  error:        state.report.error,
  sessionToken: state.session.token,
  phase:        state.report.phase,
  attendees:    state.report.attendees,
  supporters: {
    sanders: state.report.sandersSupporters,
    clinton: state.report.clintonSupporters,
    omalley: state.report.omalleySupporters,
    uncommitted: state.report.uncommittedSupporters
  },
  delegates: {
    sanders: state.report.sandersDelegates,
    clinton: state.report.clintonDelegates,
    omalley: state.report.omalleyDelegates,
    uncommitted: state.report.uncommittedDelegates
  }
});

const mapDispatchToProps = (dispatch) => ({
  reportActions:  bindActionCreators(reportActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class ReportNewView extends React.Component {
  componentWillMount() {
    this.redirectToPrecinctIfCreated();
  }

  componentDidUpdate () {
    this.redirectToPrecinctIfCreated();
  }

  redirectToPrecinctIfCreated () {
    if (this.props.created) {
      this.props.reportActions.reset();
      this.props.history.pushState(null, this.props.location.pathname.replace('/report', ''));
    }
  }

  render () {
    return (
      <Row>
        <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12} xsOffset={0}>
          <ReportNewForm {...this.props} />
        </Col>
      </Row>
    );
  }
}

reactMixin(ReportNewView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(ReportNewView);
