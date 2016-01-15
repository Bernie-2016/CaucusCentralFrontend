import React         from 'react';
import { Link }      from 'react-router';
import { phaseText } from 'utils/phaseText';

export class Precinct extends React.Component {
  render() {
    let details = [];

    if(this.props.adminPrecincts.precinct.phase !== 'start') {
      details.push(<p key="attendees">Total attendees: <strong>{this.props.adminPrecincts.precinct.total_attendees}</strong></p>)
      details.push(<p key="viability">Viability threshold: <strong>{this.props.adminPrecincts.precinct.threshold}</strong></p>)
    }

    if(this.props.adminPrecincts.precinct.phase === 'apportionment') {
      for(let i = 0; i < this.props.adminPrecincts.precinct.delegate_counts.length; i++) {
        let candidate = this.props.adminPrecincts.precinct.delegate_counts[i];
        details.push(<p key={"supporters-" + candidate.key}>{candidate.name} supporters: <strong>{candidate.supporters}</strong></p>)
      }
    }

    if(this.props.adminPrecincts.precinct.phase === 'apportioned') {
      for(let i = 0; i < this.props.adminPrecincts.precinct.delegate_counts.length; i++) {
        let candidate = this.props.adminPrecincts.precinct.delegate_counts[i];
        details.push(<p key={"supporters-" + candidate.key}>{candidate.name} supporters: <strong>{candidate.supporters}</strong></p>)
        details.push(<p key={"delegates-" + candidate.key}>{candidate.name} delegates won: <strong>{candidate.delegates_won}</strong></p>)
      }
    }

    return (
      <div>
        <Link to={'/admin/states/' + this.props.adminPrecincts.precinct.state}>Back to {this.props.adminPrecincts.precinct.state}</Link>
        <h1>{this.props.adminPrecincts.precinct.name}</h1>
        <p key="county">
          County: <strong>{this.props.adminPrecincts.precinct.county}</strong>
        </p>
        <p key="phase">
          Phase: <strong>{phaseText(this.props.adminPrecincts.precinct.phase)}</strong>
        </p>
        {details}
        <p key="edit-link">
          <Link to={'/admin/precincts/' + this.props.params.id + '/edit'} className='btn btn-primary'>Edit</Link>
        </p>
      </div>
    );
  }
}

export default Precinct;