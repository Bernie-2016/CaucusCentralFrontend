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
      width={800}
      height={(county.precincts.length * 50)+100}>
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
          width={400}
        />
        <Column
          header={<Cell>Other Precinct Info</Cell>}
          cell={props => (
            <Cell {...props}>
              {county.precincts[props.rowIndex].otherData}
            </Cell>
          )}
          width={400}
        />
      </ColumnGroup>
    </Table>;
  }

  render() {
    return <div>{this.props.counties.map(this.renderCountyTable)}</div>;
  }
}

export default ResultsTable;

