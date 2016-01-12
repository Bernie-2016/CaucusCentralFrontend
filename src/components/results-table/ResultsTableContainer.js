import React from 'react';
import ResultsTable from './ResultsTable';

export class ResultsTableContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.actions.getAllPrecincts({token: this.props.session.token});
  }

  render () {
    return <ResultsTable {...this.props} />;
  }
}

export default ResultsTableContainer;
