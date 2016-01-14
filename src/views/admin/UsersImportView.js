import React                     from 'react';
import { Link }                  from 'react-router';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import adminActions              from 'actions/admin/';
import UsersImportFormContainer  from 'components/admin/users/UsersImportFormContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UsersImportView extends React.Component {
  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>Import Users</h1>
        <UsersImportFormContainer {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersImportView);
