import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

export class ResultsTable extends React.Component {

  constructor (props) {
    super(props);
  }

  getDelegateCountsFor (delegate, delegatesArray) {
    let counts = {
      supporters:'N/A',
      won:'N/A'
    };

    for (let i = 0, len = delegatesArray.length; i < len; i++) {
      if (delegatesArray[i].key === delegate) {
        let a = delegatesArray[i];
        counts = {
          supporters:a.supporters,
          won:a.delegates_won
        };
      }
    }
    return counts;
  }

  render () {
    const precincts = this.props.adminPrecincts.precincts;
    const headerHeight = 30;
    const rowHeight = 30;
    const tableWidth = 1200;
    const tableHeight = (precincts.length * rowHeight) + (headerHeight + 3);
    const columnWidth = 150;

    return (
      <Table
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
          header={<Cell>Bernie</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('sanders', precincts[props.rowIndex].delegate_counts).supporters}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Hillary</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('hillary', precincts[props.rowIndex].delegate_counts).supporters}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>O'Malley</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('omalley', precincts[props.rowIndex].delegate_counts).supporters}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Precinct Delegates</Cell>}
          cell={props => (
            <Cell {...props}>
              {precincts[props.rowIndex].total_delegates}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Delegates Awarded</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.getDelegateCountsFor('sanders', precincts[props.rowIndex].delegate_counts).won}
            </Cell>
          )}
          width={columnWidth}
        />
      </Table>);
  }
}

export default ResultsTable;
