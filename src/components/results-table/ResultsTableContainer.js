import React from 'react';
import ResultsTable from './ResultsTable';

export class ResultsTableContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counties:[
        {
          name:'Pike',
          precincts:[
            {
              name:'Precinct 4',
              otherData:'Other 4 Data'
            },
            {
              name:'Precinct 5',
              otherData:'Other 5 Data'
            },
            {
              name:'Precinct 6',
              otherData:'Other 6 Data'
            }
          ]
        },
        {
          name:'Polk',
          precincts:[
            {
              name:'Precinct 7',
              otherData:'Other 7 Data'
            },
            {
              name:'Precinct 8',
              otherData:'Other 8 Data'
            },
            {
              name:'Precinct 9',
              otherData:'Other 9 Data'
            }
          ]
        },
        {
          name:'Pulaski',
          precincts:[
            {
              name:'Precinct 10',
              otherData:'Other 10 Data'
            },
            {
              name:'Precinct 11',
              otherData:'Other 11 Data'
            },
            {
              name:'Precinct 12',
              otherData:'Other 12 Data'
            }
          ]
        }
      ]
    };
  }

  render() {
    return <ResultsTable counties={this.state.counties} />;
  }
}

export default ResultsTableContainer;


