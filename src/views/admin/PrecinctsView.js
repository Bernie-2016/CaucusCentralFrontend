import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as adminActions          from 'actions/admin';
import PrecinctsSummary           from 'components/admin/precincts/PrecinctsSummary';
import PrecinctsTableContainer    from 'components/admin/precincts/PrecinctsTableContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class PrecinctsView extends React.Component {
  render () {
    let message = null;
    if (this.props.adminState.gettingState) {
      message = <div className='alert alert-warning'>Retrieving Precincts</div>;
    }
    return (
      <div className='container admin-dashboard-view'>
        <h1>{this.props.adminState.state.name}</h1>
        {message}
        <PrecinctsSummary {...this.props}/>
        <PrecinctsTableContainer {...this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrecinctsView);
