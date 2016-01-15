import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as adminActions          from 'actions/admin';
import PrecinctEditFormContainer          from 'components/admin/precincts/PrecinctEditFormContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class PrecinctEditView extends React.Component {
  render () {
    return (
      <div className='container admin-dashboard-view'>
        <PrecinctEditFormContainer {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctEditView);
