import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import adminActions         from 'actions/admin/';
import SVGMapContainer        from 'components/SVGMap/SVGMapContainer';
import ResultsTableContainer        from 'components/results-table/ResultsTableContainer';
import admin_actions        from 'actions/admin/';

export class AdminDashboardView extends React.Component {

  componentDidMount () {
    this.props.actions.get_precincts();
  }

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>Dashboard</h1>
        <SVGMapContainer />
        <h2>TABLE</h2>
        <ResultsTableContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admin_precincts : state.admin_precincts
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardView);
