import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Profile                from 'components/profile/Profile';
import profileActions         from 'actions/profile/';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(profileActions, dispatch)
});

export class ProfileView extends React.Component {

  componentWillMount() {
    this.props.actions.getProfile({
      token: this.props.session.token
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Profile {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
