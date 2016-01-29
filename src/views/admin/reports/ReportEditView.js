import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import { Row, Col }              from 'react-bootstrap';
import reportActions             from 'actions/report';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import ReportEditForm            from 'components/admin/reports/ReportEditForm';

const mapStateToProps = (state) => ({
  fetched:      state.report.fetched,
  updated:      state.report.updated,
  error:        state.report.error,
  sessionToken: state.session.token,
  phase:        state.report.phase,
  attendees:    state.report.attendees,
  supporters: {
    sanders: state.report.sandersSupporters,
    clinton: state.report.clintonSupporters,
    omalley: state.report.omalleySupporters,
    uncommitted: state.report.uncommittedSupporters
  }
});

const mapDispatchToProps = (dispatch) => ({
  reportActions:  bindActionCreators(reportActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class ReportEditView extends React.Component {
  componentDidMount() {
    let { precinctid, id } = this.props.params;
    this.props.reportActions.get({
      token: this.props.sessionToken,
      precinctId: precinctid,
      id: id
    });
  }

  componentWillMount() {
    this.redirectToPrecinctIfUpdated();
  }

  componentDidUpdate () {
    this.redirectToPrecinctIfUpdated();
  }

  redirectToPrecinctIfUpdated () {
    if (this.props.updated) {
      this.props.reportActions.reset();
      let { id } = this.props.params;
      this.props.history.pushState(null, this.props.location.pathname.replace(`/reports/${id}`, ''));
    }
  }

  render () {
    return (
      <Row>
        <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12} xsOffset={0}>
          <ReportEditForm {...this.props} />
        </Col>
      </Row>
    );
  }
}

reactMixin(ReportEditView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(ReportEditView);
