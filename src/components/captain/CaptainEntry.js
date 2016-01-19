import React from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';

import CaptainEntryApportionment from './CaptainEntryApportionment';
import CaptainEntryAttendees     from './CaptainEntryAttendees';
import CaptainEntryCompleted     from './CaptainEntryCompleted';
import CaptainEntryMessage       from './CaptainEntryMessage';
import CaptainEntryViability     from './CaptainEntryViability';
import captainActions            from 'actions/captain/';
import sessionActions            from 'actions/session/';
import { phaseText }             from 'utils/phaseText';

export class CaptainEntry extends React.Component {
  phaseComponent() {
    const precinctStatus = this.props.precinct.phase;
    let phase = null;
    switch (precinctStatus) {
    case 'start':
      phase = <CaptainEntryAttendees {...this.props} />;
      break;
    case 'viability':
      phase = <CaptainEntryViability {...this.props} />;
      break;
    case 'not_viable':
      phase = <CaptainEntryMessage message="Sorry, Bernie is not viable in your precinct." {...this.props} />;
      break;
    case 'apportionment':
      phase = <CaptainEntryApportionment {...this.props} 
        {...this.props} />;
      break;
    case 'apportioned':
      phase = <CaptainEntryCompleted {...this.props} />;
      break;
    default:
      phase = <CaptainEntryMessage message="An error occurred." {...this.props} />;
      break;
    }
    return phase;
  }

  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Precinct: {this.props.precinct.name}</h1>
          <h3>Phase: {phaseText(this.props.precinct.phase)}</h3>
          {this.phaseComponent()}
        </div>
      </div>
    );
  }
};

export default CaptainEntry;
