import React from 'react';
import ResultsTable from './ResultsTable';

export class ResultsTableContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      precincts:[
        {
          name:'Precinct 1',
          county:'Pike',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 2',
          county:'Pike',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 3',
          county:'Pike',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 4',
          county:'Pike',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 5',
          county:'Pike',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 6',
          county:'Pike',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 7',
          county:'Polk',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 8',
          county:'Polk',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 9',
          county:'Polk',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 10',
          county:'Polk',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 11',
          county:'Polk',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        },
        {
          name:'Precinct 12',
          county:'Polk',
          total_delegates:200,
          total_attendance:500,
          sanders_delegates_won: 120,
          sanders_attendance: 220,
        }
      ]
    };
  }

  render() {
    return <ResultsTable precincts={this.state.precincts} />;
  }
}

export default ResultsTableContainer;


