import React                 from 'react';
import { Link }              from 'react-router';
import {Table, Column, Cell} from 'fixed-data-table';

import 'fixed-data-table/dist/fixed-data-table.min.css';

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
  onUpdate(e) {
    this.props.adminActions.setUsersAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  render() {
    const keyword = _.lowerCase(this.props.keyword);
    let users = this.props.users;
    if(keyword !== '') {
      users = _.filter(users, (user) => {
        return _.lowerCase(user.firstName).indexOf(keyword) !== -1 ||
               _.lowerCase(user.lastName).indexOf(keyword) !== -1 ||
               _.lowerCase(user.email).indexOf(keyword) !== -1;
      });
    }
    let headerHeight = 30;
    let rowHeight = 40;
    let tableWidth = 1125;
    let tableHeight = (users.length * rowHeight)+(headerHeight+2);

    return (
      <div>
        <p>
          <input type="text" name="keyword" placeholder="Keyword" value={this.props.keyword} onChange={ (e) => this.onUpdate(e) } />
        </p>
        <Table
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
              width={225}
            />
            <Column
              header={<Cell>First Name</Cell>}
              cell={props => (
                <Cell {...props}>{users[props.rowIndex].first_name}</Cell>
              )}
              width={225}
            />
            <Column
              header={<Cell>Email</Cell>}
              cell={props => (
                <Cell {...props}>
                  {users[props.rowIndex].email}
                </Cell>
              )}
              width={225}
            />
            <Column
              header={<Cell>Privilege</Cell>}
              cell={props => (
                <Cell {...props}>
                  {users[props.rowIndex].privilege}
                </Cell>
              )}
              width={225}
            />
            <Column
              header={<Cell>Precinct</Cell>}
              cell={props => (
                <Cell {...props}>
                  N/A
                </Cell>
              )}
              width={225}
            />
          </Table>
      </div>
    );
  }
}

export default UsersTable;
