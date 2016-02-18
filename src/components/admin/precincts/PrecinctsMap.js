import React           from 'react';
import Highcharts      from 'highcharts-release/highcharts.src';
import ReactHighmap    from 'react-highcharts/bundle/highmaps';
import _               from 'lodash';

export class PrecinctsMap extends React.Component {
  getDelegateCounts(precinct) {
    const reports = _.filter(precinct.reports, { phase: 'completed' });
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
      const candidates = report.delegate_counts;
      let won = {
        sanders: 0,
        clinton: 0,
        omalley: 0,
        uncommitted: 0
      };
      for(let i = 0; i < candidates.length; i++) {
        const candidate = candidates[i];
        won[candidate.key] = candidate.delegates_won;
      }
      return won;
    }
    else {
      return null;
    }
  }

  render() {
    // Load county data for this state
    const { code } = this.props.params;
    const counties = require('utils/geojson/' + _.lowerCase(code));

    // Map counties to determine winners
    let countyData = _.map(counties.features, (county) => {
      const name = county.properties.name;

      let incomplete = false;
      let countySet = {
        code: name,
        name: name,
        nameValue: 'None',
        sandersDelegates: 0,
        clintonDelegates: 0,
        omalleyDelegates: 0,
        uncommittedDelegates: 0,
        value: 0
      }

      const upperName = _.upperCase(name);
      const precincts = _.filter(this.props.precincts, (precinct) => {
        return _.upperCase(precinct.county) === upperName;
      });

      _.each(precincts, (precinct) => {
        const won = this.getDelegateCounts(precinct);

        if(won === null) {
          incomplete = true;
        }
        else {
          countySet.sandersDelegates += won.sanders;
          countySet.clintonDelegates += won.clinton;
          countySet.omalleyDelegates += won.omalley;
          countySet.uncommittedDelegates += won.uncommitted;

          switch(_.max([countySet.sandersDelegates, countySet.clintonDelegates, countySet.omalleyDelegates, countySet.uncommittedDelegates])) {
            case countySet.sandersDelegates:
              countySet.value = 1;
              break;
            case countySet.clintonDelegates:
              countySet.value = 2;
              break;
            case countySet.omalleyDelegates:
              countySet.value = 3;
              break;
            case countySet.uncommittedDelegates:
              countySet.value = 4;
              break;
            default:
              countySet.value = 0;
              break;
          }  
        }
      });

      if(incomplete) {
        countySet.value = 0;
      }

      switch(countySet.value) {
        case 0:
          countySet.nameValue = 'None';
          break;
        case 1:
          countySet.nameValue = 'Sanders';
          break;
        case 2:
          countySet.nameValue = 'Clinton';
          break;
        case 3:
          countySet.nameValue = 'O\'Malley';
          break;
        case 3:
          countySet.nameValue = 'Uncommitted';
          break;
      }
      return countySet;
    });

    // Configure Highchart map
    let config = {
      colorAxis: {
        dataClasses: [
          {
            from: 0,
            name: 'Undecided/Tied Counties',
            color: '#D3D3D3'
          }, {
            from: 1,
            name: 'Sanders Counties',
            color: '#147FD7'
          }, {
            from: 2,
            name: 'Clinton Counties',
            color: '#E51D2E'
          }, {
            from: 3,
            name: 'O\'Malley Counties',
            color: '#00e500'
          }, {
            from: 4,
            name: 'Uncommitted Counties',
            color: '#840000'
          }
        ]
      },
      series: [{
        name: 'Caucus Results',
        mapData: counties,
        data: countyData,
        joinBy: ['name', 'code'],
        states: {
          hover: {
            color: '#bada55'
          }
        },
        tooltip: {
          pointFormat: '{point.name} County<br />Winner: {point.nameValue}<br />Sanders: {point.sandersDelegates}<br />Clinton: {point.clintonDelegates}<br />O\'Malley: {point.omalleyDelegates}<br />Uncommitted: {point.uncommittedDelegates}'
        }
      }],
      title: {
        text: ''
      }
    };

    if(this.props.fetched) {
      return (
          <div>
            <h3 className='text-center'>Map</h3>
            <ReactHighmap config={config} />
            <hr />
          </div>
          );
    } else {
      return <div />;
    }
  }
}

export default PrecinctsMap;
