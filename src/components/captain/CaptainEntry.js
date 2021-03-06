import React                     from 'react';
import Loader                    from 'react-loader';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';

import CaptainEntryApportionment from './CaptainEntryApportionment';
import CaptainEntryAttendees     from './CaptainEntryAttendees';
import CaptainEntryCompleted     from './CaptainEntryCompleted';
import CaptainEntryMessage       from './CaptainEntryMessage';
import CaptainEntryTotal         from './CaptainEntryTotal';
import CaptainEntryViability     from './CaptainEntryViability';
import captainActions            from 'actions/captain/';
import sessionActions            from 'actions/session/';
import { phaseText }             from 'utils/phaseText';

export class CaptainEntry extends React.Component {
  phaseComponent() {
    let phase = null;
    switch (this.props.phase) {
    case 'start':
      phase = <CaptainEntryAttendees {...this.props} />;
      break;
    case 'viability':
      phase = <CaptainEntryViability {...this.props} />;
      break;
    case 'apportionment':
      phase = <CaptainEntryApportionment {...this.props} 
        {...this.props} />;
      break;
    case 'apportioned':
      phase = <CaptainEntryTotal {...this.props} />;
      break;
    case 'completed':
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
      <Loader loaded={this.props.fetched}>
        <h1>Precinct: {this.props.name}</h1>
        <h3>Phase: {phaseText(this.props.phase)}</h3>
        {this.phaseComponent()}
      </Loader>
    );
  }
};

export default CaptainEntry;
