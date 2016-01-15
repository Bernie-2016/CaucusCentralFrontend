import React         from 'react';
import { Link }      from 'react-router';
import { phaseText } from 'utils/phaseText';

export class Precinct extends React.Component {
  render() {
    let details = [];

    if(this.props.adminPrecincts.precinct.phase !== 'start') {
      details.push(<p>Total attendees: <strong>{this.props.adminPrecincts.precinct.total_attendees}</strong></p>)
      details.push(<p>Viability threshold: <strong>{this.props.adminPrecincts.precinct.threshold}</strong></p>)
    }

    if(this.props.adminPrecincts.precinct.phase === 'apportionment') {
      for(let i = 0; i < this.props.adminPrecincts.precinct.delegate_counts.length; i++) {
        let candidate = this.props.adminPrecincts.precinct.delegate_counts[i];
        details.push(<p>{candidate.name} supporters: <strong>{candidate.supporters}</strong></p>)
      }
    }

    if(this.props.adminPrecincts.precinct.phase === 'apportioned') {
      for(let i = 0; i < this.props.adminPrecincts.precinct.delegate_counts.length; i++) {
        let candidate = this.props.adminPrecincts.precinct.delegate_counts[i];
        details.push(<p>{candidate.name} supporters: <strong>{candidate.supporters}</strong></p>)
        details.push(<p>{candidate.name} delegates won: <strong>{candidate.delegates_won}</strong></p>)
      }
    }

    return (
      <div>
        <Link to={'/admin/states/' + this.props.adminPrecincts.precinct.state}>Back to {this.props.adminPrecincts.precinct.state}</Link>
        <h1>{this.props.adminPrecincts.precinct.name}</h1>
        <p>
          County: <strong>{this.props.adminPrecincts.precinct.county}</strong>
        </p>
        <p>
          Phase: <strong>{phaseText(this.props.adminPrecincts.precinct.phase)}</strong>
        </p>
        {details}
      </div>
    );
  }
}

export default Precinct;