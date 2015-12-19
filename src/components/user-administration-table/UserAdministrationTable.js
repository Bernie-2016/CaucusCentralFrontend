import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

export class UserAdministrationTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let users = this.props.users;
    let headerHeight = 30;
    let rowHeight = 30;
    let tableWidth = 680;
    let tableHeight = (users.length * rowHeight)+(headerHeight+2);
    let columnWidth = 160;

    return <Table
      rowsCount={users.length}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      width={tableWidth}
      height={tableHeight}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>{users[props.rowIndex].name}</Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={props => (
            <Cell {...props}>
              {users[props.rowIndex].email}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Type</Cell>}
          cell={props => (
            <Cell {...props}>
              {users[props.rowIndex].type}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Precinct</Cell>}
          cell={props => (
            <Cell {...props}>
              {users[props.rowIndex].precinct}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          cell={props => (
            <Cell>
             <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
            </Cell>
          )}
          width={40}
        />
      </Table>;
  }
}

export default UserAdministrationTable;


