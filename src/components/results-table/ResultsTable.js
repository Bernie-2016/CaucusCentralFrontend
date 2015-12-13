import React from 'react';
import {Table, Column, ColumnGroup, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

export class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCountyTable(county) {
    console.log('COUNTY', county);
    return <Table
      rowsCount={county.precincts.length}
      rowHeight={50}
      headerHeight={50}
      groupHeaderHeight={50}
      width={1200}
      height={(county.precincts.length * 50)+102}>
      <ColumnGroup
          fixed={true}
          header={<Cell>{county.name}</Cell>}>
        <Column
          fixed={true}
          header={<Cell>Precinct</Cell>}
          cell={props => (
            <Cell {...props}>
              {county.precincts[props.rowIndex].name}
            </Cell>
          )}
          width={300}
        />
        <Column
          header={<Cell>Total Delegates</Cell>}
          cell={props => (
            <Cell {...props}>
              {county.precincts[props.rowIndex].total_delegates}
            </Cell>
          )}
          width={300}
        />
        <Column
          header={<Cell>Sanders Totals</Cell>}
          cell={props => (
            <Cell {...props}>
              Attendance: <strong>{county.precincts[props.rowIndex].campaigns.sanders.total_attendance}</strong><br />
              Won: <strong>{county.precincts[props.rowIndex].campaigns.sanders.total_delegates_won}</strong>
            </Cell>
          )}
          width={300}
        />
        <Column
          header={<Cell>Clinton Totals</Cell>}
          cell={props => (
            <Cell {...props}>
              Attendance: <strong>{county.precincts[props.rowIndex].campaigns.clinton.total_attendance}</strong><br />
              Won: <strong>{county.precincts[props.rowIndex].campaigns.clinton.total_delegates_won}</strong>
            </Cell>
          )}
          width={300}
        />
      </ColumnGroup>
    </Table>;
  }

  render() {
    return <div>{this.props.counties.map(this.renderCountyTable)}</div>;
  }
}

export default ResultsTable;

