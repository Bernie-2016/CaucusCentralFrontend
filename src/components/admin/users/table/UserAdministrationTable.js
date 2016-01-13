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
    let rowHeight = 40;
    let tableWidth = 680;
    let tableHeight = (users.length * rowHeight)+(headerHeight+2);
    let columnWidth = 120;

    return <Table
      rowsCount={users.length}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      width={tableWidth}
      height={tableHeight}>
        <Column
          header={<Cell>First Name</Cell>}
          cell={props => (
            <Cell {...props}>{users[props.rowIndex].first_name}</Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Last Name</Cell>}
          cell={props => (
            <Cell {...props}>{users[props.rowIndex].last_name}</Cell>
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
          width={200}
        />
        <Column
          header={<Cell>Privilege</Cell>}
          cell={props => (
            <Cell {...props}>
              {users[props.rowIndex].privilege}
            </Cell>
          )}
          width={columnWidth}
        />
        <Column
          header={<Cell>Precinct</Cell>}
          cell={props => (
            <Cell {...props}>
              N/A
            </Cell>
          )}
          width={80}
        />
        <Column
          cell={props => (
            <Cell>
             <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
            </Cell>
          )}
          width={40}
        />
      </Table>;
  }
}

export default UserAdministrationTable;


