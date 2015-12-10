import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

export class ResultsTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table
        rowsCount={this.props.data.length}
        rowHeight={50}
        headerHeight={50}
        width={800}
        height={(this.props.data.length * 50)+50}>
        <Column
          header={<Cell>County</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.props.data[props.rowIndex].name}
            </Cell>
          )}
          width={400}
        />
        <Column
          header={<Cell>Total Precincts</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.props.data[props.rowIndex].precincts.length}
            </Cell>
          )}
          width={400}
        />

      </Table>
    );
  }
}

export default ResultsTable;

