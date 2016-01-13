import React from 'react';

export class PrecinctsSummary extends React.Component {
  getTotalCountsFor (candidateName) {
    let count = 0;
    const precincts = this.props.adminState.state.precincts;
    for(let i = 0; i < precincts.length; i++) {
      if(precincts[i].phase === 'apportioned') {
        const candidates = precincts[i].delegate_counts;
        for (let j = 0; j < candidates.length; j++) {
          if (candidates[j].key === candidateName) {
            count += candidates[j].delegates_won;
          }
        }
      }
    }
    return count;
  }

  getTotalDelegates() {
    let count = 0;
    const precincts = this.props.adminState.state.precincts;
    for(let i = 0; i < precincts.length; i++) {
      count += precincts[i].total_delegates;
    }
    return count;
  }

  render() {
    return (
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
    );
  }
}

export default PrecinctsSummary;