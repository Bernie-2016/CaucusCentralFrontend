import React              from 'react';
import { Link }           from 'react-router';
import { formatEndpoint } from 'utils/api';

export class PrecinctsSummary extends React.Component {
  getTotalCountsFor(candidate) {
    let count = 0;
    for(let i = 0; i < this.props.precincts.length; i++) {
      const reports = _.filter(this.props.precincts[i].reports, { phase: 'apportioned' });
      let report = null;

      switch(this.props.dataSource) {
        case 'best':
          report = _.find(reports, { source: 'manual' });
          if(report === undefined) {
            report = _.find(reports, { source: 'microsoft' });
          }
          if(report === undefined) {
            report = _.find(reports, { source: 'captain' });
          }
          if(report === undefined) {
            report = _.find(reports, { source: 'crowd' });
          }
          break;
        case 'microsoft':
          report = _.find(reports, { source: 'microsoft' });
          break;
        case 'captain':
          report = _.find(reports, { source: 'captain' });
          break;
        case 'crowd':
          report = _.find(_.reverse(_.sortBy(reports, 'created_at')), { source: 'crowd' });
          break;
      }

      if(report !== undefined) {
        count += _.find(report.delegate_counts, { key: candidate }).delegates_won
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

  onUpdate(e) {
    this.props.adminActions.setPrecinctsAttr({
      key: e.target.name, 
      value: e.target.value
    });
  }

  render() {
    if(this.props.fetched) {
      return (
        <div>
          <div className="pull-right col-md-3">
            <select className="form-control" name="dataSource" value={this.props.dataSource} onChange={ (e) => this.onUpdate(e) } >
              <option value="best" key="best">Best Available</option>
              <option value="microsoft" key="microsoft">Microsoft</option>
              <option value="captain" key="captain">Captain Reports</option>
              <option value="crowd" key="crowd">Crowdsourced</option>
            </select>
          </div>
          <h1>{this.props.state.name}</h1>
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