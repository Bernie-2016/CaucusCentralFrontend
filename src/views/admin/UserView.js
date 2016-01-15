import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UserViewContainer      from 'components/admin/users/UserViewContainer';
import adminActions           from 'actions/admin/';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class UserView extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <UserViewContainer {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
