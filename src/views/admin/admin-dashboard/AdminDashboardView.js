import React                  from 'react';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import adminActions         from 'actions/admin/';
import SVGMapContainer        from 'components/SVGMap/SVGMapContainer';
import ResultsTableContainer        from 'components/results-table/ResultsTableContainer';

export class AdminDashboardView extends React.Component {

  componentDidMount () {
    this.props.actions.get_precincts();
  }


  renderMessage() {
    var message = '';
    if (this.props.adminPrecincts.getting_precincts) {
      message = 'Retrieving Precincts';
    }
    return message;
  }

  render () {
    return (
      <div className='container admin-dashboard-view'>
        <h1>Dashboard</h1>
        <div className='message'>{this.renderMessage()}</div>
        <ResultsTableContainer />
        <SVGMapContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  adminPrecincts : state.adminPrecincts
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardView);
