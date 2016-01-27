import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import reactMixin                 from 'react-mixin';
import adminActions               from 'actions/admin';
import sessionActions             from 'actions/session';
import LogoutIfUnauthorizedMixin  from 'components/mixins/LogoutIfUnauthorizedMixin';
import PrecinctsSummary           from 'components/admin/precincts/PrecinctsSummary';
import PrecinctsMap               from 'components/admin/precincts/PrecinctsMap';
import PrecinctsTable             from 'components/admin/precincts/PrecinctsTable';

const mapStateToProps = (state) => ({
  fetched:      state.adminState.fetched,
  error:        state.adminState.error,
  state:        state.adminState.state,
  precincts:    state.adminState.state.precincts,
  dataSource:   state.adminPrecincts.dataSource,
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
    this.props.adminActions.getState({ code: code, token: this.props.sessionToken });
  }

  render () {
    return (
      <div>
        <PrecinctsSummary {...this.props} />
        <hr />
        <PrecinctsMap {...this.props} />
        <hr />
        <PrecinctsTable {...this.props} />
      </div>
    );
  }
}

reactMixin(PrecinctsView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctsView);
