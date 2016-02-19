import React                     from 'react';
import { Link }                  from 'react-router';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import AuditsTable                from 'components/admin/audits/AuditsTable';

const mapStateToProps = (state) => ({
  fetched:      state.adminAudits.fetched,
  audits:       state.adminAudits.audits,
  error:        state.adminAudits.error,
  sessionToken: state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class AuditsView extends React.Component {
  componentDidMount() {
    this.props.adminActions.getAllAudits({token: this.props.sessionToken});
  }

  render () {
    return (
      <div>
        <div className='text-center'>
          <h3>Audits</h3>
          <p>
            BS = Bernie Sanders, HC = Hillary Clinton, MOM = Martin O'Malley, U = Uncommitted
          </p>
        </div>
        <AuditsTable {...this.props} />
      </div>
    );
  }
}

reactMixin(AuditsView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(AuditsView);
