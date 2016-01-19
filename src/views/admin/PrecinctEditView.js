import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import reactMixin                 from 'react-mixin';
import adminActions               from 'actions/admin/';
import sessionActions             from 'actions/session/';
import LogoutIfUnauthorizedMixin  from 'components/mixins/LogoutIfUnauthorizedMixin';
import PrecinctEditForm           from 'components/admin/precincts/PrecinctEditForm';

const mapStateToProps = (state) => ({
  updated:        state.adminPrecinct.updated,
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

export class PrecinctEditView extends React.Component {
  redirectToPrecinctIfUpdated () {
    if (this.props.updated) {
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  componentDidMount() {
    let { id } = this.props.params;
    this.props.adminActions.getPrecinct({id: id, token: this.props.sessionToken});
  }

  componentWillMount() {
    this.redirectToPrecinctIfUpdated();
  }

  componentDidUpdate () {
    this.redirectToPrecinctIfUpdated();
  }

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>Edit Precinct</h1>
        <p>Use this form to override precinct data if a volunteer reports an error.</p>
        <PrecinctEditForm {...this.props} />
      </div>
    );
  }
}

reactMixin(PrecinctEditView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctEditView);
