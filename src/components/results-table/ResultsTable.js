import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

export class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let precincts = this.props.precincts;
    let headerHeight = 30;
    let rowHeight = 30;
    let tableWidth = 1200;
    let tableHeight = (precincts.length * rowHeight)+(headerHeight+3);
    let columnWidth = 200;

    return <Table
      rowsCount={precincts.length}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      width={tableWidth}
      height={tableHeight}>
        <Column
          header={<Cell>County</Cell>}
          cell={props => (
            <Cell {...props}>{precincts[props.rowIndex].county}</Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Precinct</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].name}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Attendees</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].total_attendees}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Attendees for Bernie</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].supporting_attendees}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Precinct Delegates</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].supporting_attendees}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Delegates Awarded</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].supporting_attendees}
            </Cell>
          )}
          width={columnWidth}
        />
      </Table>;
  }
}

export default ResultsTable;

