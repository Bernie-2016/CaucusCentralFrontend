import React                 from 'react';
import { Link }              from 'react-router';
import Loader                from 'react-loader';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.min.css';

class TextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class LinkCell extends React.Component {
  render() {
    const {rowIndex, field, linkField, data, ...props} = this.props;
    const link = '/admin/states/' + data[rowIndex][linkField];
    return (
      <Cell {...props}>
        <Link to={link}>
          {data[rowIndex][field]}
        </Link>
      </Cell>
    );
  }
}

export class StatesTable extends React.Component {
  render () {
    const states = this.props.states;
    const headerHeight = 30;
    const rowHeight = 30;
    const tableWidth = 1125;
    const tableHeight = (states.length * rowHeight) + (headerHeight + 3);

    return (
      <Loader loaded={this.props.fetched}>
        <Table
          rowsCount={states.length}
          rowHeight={rowHeight}
          headerHeight={headerHeight}
          width={tableWidth}
          height={tableHeight}>

          <Column
            header={<Cell>Name</Cell>}
            cell={
              <LinkCell
                data={states}
                field='name'
                linkField='code'
              />
            }
            width={340}
          />
          <Column
            header={<Cell>Code</Cell>}
            cell={
              <TextCell
                data={states}
                field='code'
              />
            }
            width={300}
          />
          <Column
            header={<Cell>Date</Cell>}
            cell={
              <TextCell
                data={states}
                field='caucus_date'
              />
            }
            width={480}
          />
        </Table>
      </Loader>
    );
  }
}

export default StatesTable;
