import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import UsersEditFormContainer from 'components/admin/users/UsersEditFormContainer';
import adminActions           from 'actions/admin/';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class UsersEditView extends React.Component {
  componentWillMount() {
    let { id } = this.props.params;
    this.props.actions.getUser({
      token: this.props.session.token,
      id: id
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <UsersEditFormContainer {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditView);
