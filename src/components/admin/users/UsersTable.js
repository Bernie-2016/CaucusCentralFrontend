import React                 from 'react';
import { Link }              from 'react-router';
import {Table, Column, Cell} from 'fixed-data-table';
require('fixed-data-table/dist/fixed-data-table.min.css');

class LinkCell extends React.Component {
  render() {
    const {rowIndex, field, linkField, data, ...props} = this.props;
    const link = '/admin/users/' + data[rowIndex][linkField];
    return (
      <Cell {...props}>
        <Link to={link}>
          {data[rowIndex][field]}
        </Link>
      </Cell>
    );
  }
}

export class UsersTable extends React.Component {
  render() {
    let users = this.props.users;
    let headerHeight = 30;
    let rowHeight = 40;
    let tableWidth = 1125;
    let tableHeight = (users.length * rowHeight)+(headerHeight+2);

    return <Table
      rowsCount={users.length}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      width={tableWidth}
      height={tableHeight}>
        <Column
          header={<Cell>Last Name</Cell>}
          cell={
            <LinkCell
              data={users}
              field='first_name'
              linkField='id'
            />
          }
          width={200}
        />
        <Column
          header={<Cell>First Name</Cell>}
          cell={props => (
            <Cell {...props}>{users[props.rowIndex].first_name}</Cell>
          )}
          width={200}
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
          width={200}
        />
        <Column
          header={<Cell>Precinct</Cell>}
          cell={props => (
            <Cell {...props}>
              N/A
            </Cell>
          )}
          width={200}
        />
        <Column
          cell={props => (
            <Cell>
             <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
            </Cell>
          )}
          width={125}
        />
      </Table>;
  }
}

export default UsersTable;
