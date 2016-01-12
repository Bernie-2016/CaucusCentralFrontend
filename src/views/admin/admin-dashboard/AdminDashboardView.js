import React                      from 'react';
import { Link }                   from 'react-router';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as adminActions          from 'actions/admin';
import SVGMapContainer            from 'components/SVGMap/SVGMapContainer';
import ResultsTableContainer      from 'components/results-table/ResultsTableContainer';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(adminActions, dispatch)
});

export class AdminDashboardView extends React.Component {

  renderMessage () {
    let message = '';
    if (this.props.adminPrecincts.gettingPrecincts) {
      message = 'Retrieving Precincts';
    }
    return message;
  }

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>Dashboard</h1>
        <div className='message'>{this.renderMessage()}</div>
        <ResultsTableContainer {...this.props}/>
        <SVGMapContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardView);
