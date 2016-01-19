import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';

export class StatesTable extends React.Component {
  render () {
    let stateComponents = [];
    _.each(this.props.states, (state) => {
      stateComponents.push(
        <Tr key={state.code}>
          <Td column="name">
            <Link to={'/admin/states/' + state.code}>
              {state.name}
            </Link>
          </Td>
          <Td column="code">
            {state.code}
          </Td>
          <Td column="date">
            {state.caucus_date}
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <Table className="table table-striped">
          <Thead>
            <Th column="name">
              <strong>Name</strong>
            </Th>
            <Th column="code">
              <strong>Code</strong>
            </Th>
            <Th column="date">
              <strong>Date</strong>
            </Th>
          </Thead>
          {stateComponents}
        </Table>
      </Loader>
    );
  }
}

export default StatesTable;
