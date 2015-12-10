import React from 'react';
import ResultsTable from './ResultsTable';

export class ResultsTableContainer extends React.Component {
  componentDidMount() {
    this.setState({
      counties:[
        {
          name:'Pike',
          precincts:['4','5','6']
        },
        {
          name:'Polk',
          precincts:['1','2','3']
        },
        {
          name:'Pulaski',
          precincts:['7','8']
        }
      ]
    });
  }

  render() {
    return <ResultsTable pieces={this.state.counties} />;
  }
}

export default ResultsTableContainer;


