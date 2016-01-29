import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import { phaseText }                from 'utils/phaseText';
import _                            from 'lodash';

export class PrecinctsTable extends React.Component {
  precinctCaptainLink(precinct) {
    if(precinct.captain_id !== null) {
      return (
        <Link to={'/admin/users/' + precinct.captain_id}>
          {precinct.captain_first_name + ' ' + precinct.captain_last_name}
        </Link>
      );
    }
    else {
      return (
        <p>N/A</p>
      );
    }
  }

  onUpdate(e) {
    this.props.adminActions.setPrecinctsAttr({
      key: e.target.name,
      value: e.target.value
    });
  }

  render () {
    const { code } = this.props.params;

    let precinctComponents = [];
    _.each(this.props.precincts, (precinct) => {
      precinctComponents.push(
        <Tr key={precinct.id}>
          <Td column="county">
            {precinct.county}
          </Td>
          <Td column="precinct" value={precinct.name}>
            <Link to={'/admin/states/' + code + '/precincts/' + precinct.id}>
              {precinct.name}
            </Link>
          </Td>
          <Td column="delegates">
            {precinct.total_delegates}
          </Td>
          <Td column="captain">
            {this.precinctCaptainLink(precinct)}
          </Td>
        </Tr>
      );
    });

    return (
      <Loader loaded={this.props.fetched}>
        <h3 className='text-center'>Precincts</h3>
        <div className="table-responsive">
          <Table className="table table-striped" itemsPerPage={50} filterable={['county', 'precinct']} noDataText='No precincts found.'>
            <Thead>
              <Th column="county">
                <strong>County</strong>
              </Th>
              <Th column="precinct">
                <strong>Precinct</strong>
              </Th>
              <Th column="delegates">
                <strong>Total Delegates</strong>
              </Th>
              <Th column="captain">
                <strong>Captain</strong>
              </Th>
            </Thead>
            {precinctComponents}
          </Table>
        </div>
      </Loader>
    );
  }
}

export default PrecinctsTable;
