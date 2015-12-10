import React                  from 'react';
import { Link }               from 'react-router';
import SVGMapContainer        from 'components/SVGMap/SVGMapContainer';
import ResultsTableContainer        from 'components/results-table/ResultsTableContainer';

export class AdminDashboardView extends React.Component {

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>Dashboard</h1>
        <h2>MAP</h2>
        <SVGMapContainer />
        <h2>TABLE</h2>
        <ResultsTableContainer />
      </div>
    );
  }
}

export default AdminDashboardView;
