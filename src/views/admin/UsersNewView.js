import React                   from 'react';
import { Link }                from 'react-router';
import { bindActionCreators }  from 'redux';
import { connect }             from 'react-redux';
import adminActions            from 'actions/admin/';
import UsersNewFormContainer   from 'components/admin/users/UsersNewFormContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UsersNewView extends React.Component {
  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>New User</h1>
        <UsersNewFormContainer {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersNewView);
