import React                     from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import reactMixin                from 'react-mixin';
import { Row, Col }              from 'react-bootstrap';
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
      return (
        <UsersImportReport {...this.props} /> 
      );
    }
    else {
      return (
        <Row>
          <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12} xsOffset={0}>
            <UsersImportForm {...this.props} />
          </Col>
        </Row>
      );
    }
  }
}

reactMixin(UsersImportView.prototype, LogoutIfUnauthorizedMixin);

export default connect(mapStateToProps, mapDispatchToProps)(UsersImportView);
