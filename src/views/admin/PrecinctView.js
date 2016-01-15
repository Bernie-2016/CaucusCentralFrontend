import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as adminActions          from 'actions/admin';
import PrecinctContainer          from 'components/admin/precincts/PrecinctContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class PrecinctView extends React.Component {
  render () {
    return (
      <div className='container admin-dashboard-view'>
        <PrecinctContainer {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctView);
