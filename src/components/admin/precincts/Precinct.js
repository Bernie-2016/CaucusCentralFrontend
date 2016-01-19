import React         from 'react';
import { Link }      from 'react-router';
import Loader        from 'react-loader';
import { phaseText } from 'utils/phaseText';

export class Precinct extends React.Component {
  render() {
    let details = [];

    if(this.props.phase !== 'start') {
      details.push(<p key="attendees">Total attendees: <strong>{this.props.attendees}</strong></p>)
      details.push(<p key="viability">Viability threshold: <strong>{this.props.threshold}</strong></p>)
    }

    if(this.props.phase === 'apportionment') {
      for(let i = 0; i < this.props.delegateCounts.length; i++) {
        let candidate = this.props.delegateCounts[i];
        details.push(<p key={"supporters-" + candidate.key}>{candidate.name} supporters: <strong>{candidate.supporters}</strong></p>)
      }
    }

    if(this.props.phase === 'apportioned') {
      for(let i = 0; i < this.props.delegateCounts.length; i++) {
        let candidate = this.props.delegateCounts[i];
        details.push(<p key={"supporters-" + candidate.key}>{candidate.name} supporters: <strong>{candidate.supporters}</strong></p>)
        details.push(<p key={"delegates-" + candidate.key}>{candidate.name} delegates won: <strong>{candidate.delegates_won}</strong></p>)
      }
    }

    return (
      <Loader loaded={this.props.fetched}>
        <Link to={'/admin/states/' + this.props.state.code}>Back to {this.props.state.name}</Link>
        <h1>{this.props.name}</h1>
        <p key="county">
          County: <strong>{this.props.county}</strong>
        </p>
        <p key="phase">
          Phase: <strong>{phaseText(this.props.phase)}</strong>
        </p>
        <p key="delegates">
          Total delegates: <strong>{this.props.delegates}</strong>
        </p>
        {details}
        <p key="edit-link">
          <Link to={'/admin/states/' + this.props.state.code + '/precincts/' + this.props.params.id + '/edit'} className='btn btn-primary'>Edit</Link>
        </p>
      </Loader>
    );
  }
}

export default Precinct;
