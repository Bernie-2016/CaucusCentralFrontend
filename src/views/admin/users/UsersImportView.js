import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import adminActions              from 'actions/admin';
import sessionActions            from 'actions/session';
import LogoutIfUnauthorizedMixin from 'components/mixins/LogoutIfUnauthorizedMixin';
import UsersImportForm           from 'components/admin/users/UsersImportForm';
import UsersImportReport         from 'components/admin/users/UsersImportReport';

const mapStateToProps = (state) => ({
  imported:      state.adminUsers.imported,
  importedCount: state.adminUsers.importedCount,
  usersToImport: state.adminUsers.usersToImport,
  failedUsers:   state.adminUsers.failedUsers,
  error:         state.adminUser.error,
  sessionToken:  state.session.token
});

const mapDispatchToProps = (dispatch) => ({
  adminActions:   bindActionCreators(adminActions, dispatch),
  sessionActions: bindActionCreators(sessionActions, dispatch)
});

export class UsersImportView extends React.Component {
  render () {
    let component = null;
    if(this.props.imported) {
      component = (
        <div className='col-md-12'>
          <UsersImportReport {...this.props} /> 
        </div>
      );
    }
    else {
      component = (
        <div className='col-md-6'>
          <UsersImportForm {...this.props} />
        </div>
      );
    }
    return (
      <div className='container admin-user-administration-view'>
        <h1>Import Users</h1>
        <div className='row'>
          {component}
        </div>
      </div>
    );
  }
}

reactMixin(UsersImportView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UsersImportView);
