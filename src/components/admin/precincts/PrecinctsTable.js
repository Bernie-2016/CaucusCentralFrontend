import React                        from 'react';
import { Link }                     from 'react-router';
import Loader                       from 'react-loader';
import { Table, Thead, Th, Tr, Td } from 'reactable';
import { phaseText }                from 'utils/phaseText';
import _                            from 'lodash';

export class PrecinctsTable extends React.Component {
  getDelegateCountsFor (candidateName, precinct) {
    let counts = {
      supporters:'N/A',
      won:'N/A'
    };
    const candidates = precinct.delegate_counts;

    if (precinct.phase === 'apportioned' || precinct.phase === 'apportionment') {
      for (let i = 0, len = candidates.length; i < len; i++) {
        if (candidates[i].key === candidateName) {
          const candidate = candidates[i];
          counts = {
            supporters: candidate.supporters,
            won: candidate.delegates_won
          };
        }
      }
    }
    return counts;
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
          <Td column="phase">
            {phaseText(precinct.phase)}
          </Td>
          <Td column="attendees">
            {precinct.total_attendees}
          </Td>
          <Td column="sanders">
            {this.getDelegateCountsFor('sanders', precinct).supporters}
          </Td>
          <Td column="clinton">
            {this.getDelegateCountsFor('clinton', precinct).supporters}
          </Td>
          <Td column="omalley">
            {this.getDelegateCountsFor('omalley', precinct).supporters}
          </Td>
          <Td column="delegates">
            {precinct.total_delegates}
          </Td>
          <Td column="awarded">
            {this.getDelegateCountsFor('sanders', precinct).won}
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
            <Th column="phase">
              <strong>Phase</strong>
            </Th>
            <Th column="attendees">
              <strong>Attendees</strong>
            </Th>
            <Th column="sanders">
              <strong>Sanders</strong>
            </Th>
            <Th column="clinton">
              <strong>Clinton</strong>
            </Th>
            <Th column="omalley">
              <strong>O'Malley</strong>
            </Th>
            <Th column="delegates">
              <strong>Total Delegates</strong>
            </Th>
            <Th column="awarded">
              <strong>Delegates Awarded</strong>
            </Th>
          </Thead>
          {precinctComponents}
        </Table>
      </Loader>
    );
  }
}

export default PrecinctsTable;
