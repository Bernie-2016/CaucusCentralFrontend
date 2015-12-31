import React from 'react';
import ResultsTable from './ResultsTable';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import adminActions         from 'actions/admin/';

export class ResultsTableContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <ResultsTable precincts={this.props.precincts} />;
  }
}


const mapStateToProps = (state) => ({
  precincts : state.adminPrecincts.precincts
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(adminActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsTableContainer);


