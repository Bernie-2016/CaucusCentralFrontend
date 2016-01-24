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
    const keyword = _.lowerCase(this.props.keyword);
    let precincts = this.props.precincts;
    if(keyword !== '') {
      precincts = _.filter(precincts, (precinct) => {
        return _.lowerCase(precinct.name).indexOf(keyword) !== -1 || _.lowerCase(precinct.county).indexOf(keyword) !== -1;
      });
    }
    const { code } = this.props.params;

    let precinctComponents = [];
    _.each(precincts, (precinct) => {
      precinctComponents.push(
        <Tr key={precinct.id}>
          <Td column="county">
            {precinct.county}
          </Td>
          <Td column="precinct">
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
        <p>
          <input type="search" name="keyword" placeholder="Keyword" value={this.props.keyword} onChange={ (e) => this.onUpdate(e) } />
        </p>
        <Table className="table table-striped" itemsPerPage={50}>
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
      </Loader>
    );
  }
}

export default PrecinctsTable;
