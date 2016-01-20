import React              from 'react';
import { Link }           from 'react-router';
import { formatEndpoint } from 'utils/api';

export class PrecinctsSummary extends React.Component {
  getTotalCountsFor (candidate) {
    let count = 0;
    const precincts = this.props.precincts;
    for(let i = 0; i < precincts.length; i++) {
      if(precincts[i].phase === 'apportioned') {
        const candidates = precincts[i].delegate_counts;
        for (let j = 0; j < candidates.length; j++) {
          if (candidates[j].key === candidate) {
            count += candidates[j].delegates_won;
          }
        }
      }
    }
    return count;
  }

  getTotalDelegates() {
    let count = 0;
    const precincts = this.props.precincts;
    for(let i = 0; i < precincts.length; i++) {
      count += precincts[i].total_delegates;
    }
    return count;
  }

  render() {
    if(this.props.fetched) {
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Total Delegates</th>
                <th>Bernie Sanders</th>
                <th>Hillary Clinton</th>
                <th>Martin O'Malley</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.getTotalDelegates()}</td>
                <td>{this.getTotalCountsFor('sanders')}</td>
                <td>{this.getTotalCountsFor('clinton')}</td>
                <td>{this.getTotalCountsFor('omalley')}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <a href={formatEndpoint('/states/' + this.props.state.code + '/csv?token=' + this.props.sessionToken)} target='_blank'>
              Download Results CSV
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

export default PrecinctsSummary;