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
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            },
            {
              name:'Precinct 5',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            },
            {
              name:'Precinct 6',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            }
          ]
        },
        {
          name:'Polk',
          precincts:[
            {
              name:'Precinct 7',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            },
            {
              name:'Precinct 8',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            },
            {
              name:'Precinct 9',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            }
          ]
        },
        {
          name:'Pulaski',
          precincts:[
            {
              name:'Precinct 10',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            },
            {
              name:'Precinct 11',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
            },
            {
              name:'Precinct 12',
              total_delegates:200,
              campaigns:{
                'sanders':{
                  total_delegates_won:120,
                  total_attendance:200
                },
                'clinton':{
                  total_delegates_won:80,
                  total_attendance:150
                }
              }
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


