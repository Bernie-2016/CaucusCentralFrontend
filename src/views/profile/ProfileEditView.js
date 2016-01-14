import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import ProfileFormContainer   from 'components/profile/ProfileFormContainer';
import profileActions         from 'actions/profile/';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(profileActions, dispatch)
});

export class ProfileEditView extends React.Component {

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
            <ProfileFormContainer {...this.props} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditView);
