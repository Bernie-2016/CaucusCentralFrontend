import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Profile                from 'components/profile/Profile';
import adminActions           from 'actions/admin/';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export class ProfileView extends React.Component {
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
            <Profile user={this.props.adminUser.user} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
