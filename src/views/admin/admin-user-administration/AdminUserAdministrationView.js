import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UserAdministrationTableContainer               from 'components/user-administration-table/UserAdministrationTableContainer';
import UserAdministrationFormContainer               from 'components/user-administration-form/UserAdministrationFormContainer';
import adminActions           from 'actions/admin/';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  precincts : state.precincts
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class AdminUserAdministrationView extends React.Component {

  render () {
    return (
      <div className='container admin-user-administration-view'>
        <h1>User Administration</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <UserAdministrationTableContainer precincts={this.props.precincts} />
          </div>
          <div className='col-lg-4'>
            <UserAdministrationFormContainer precincts={this.props.precincts} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserAdministrationView);
