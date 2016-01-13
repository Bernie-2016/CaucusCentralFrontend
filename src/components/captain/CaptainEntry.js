import React from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import CaptainEntryApportionment from './CaptainEntryApportionment';
import CaptainEntryAttendees     from './CaptainEntryAttendees';
import CaptainEntryMessage       from './CaptainEntryMessage';
import CaptainEntryViability     from './CaptainEntryViability';
import captainActions            from 'actions/captain/';

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(captainActions, dispatch)
});

export class CaptainEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: 0,
      bernieSupporters: 0,
      hillarySupporters: 0,
      martinSupporters: 0,
      viabilitySupporters: 0
    };
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  phaseText() {
    const precinctStatus = this.props.captainPrecinct.precinct.phase;
    let text = '';
    switch (precinctStatus) {
    case 'start':
      text = 'Ready to Begin';
      break;
    case 'viability':
      text = 'Viability Phase';
      break;
    case 'not_viable':
      text = 'Not Viable';
      break;
    case 'apportionment':
      text = 'Apportionment Phase';
      break;
    case 'apportioned':
      text = 'Caucus completed';
      break;
    default:
      text = 'Invalid precinct state';
    }
    return text;
  }

  phaseComponent() {
    const precinctStatus = this.props.captainPrecinct.precinct.phase;
    let phase = undefined;
    switch (precinctStatus) {
    case 'start':
      phase = <CaptainEntryAttendees attendees={this.state.attendees} onUpdate={(e) => this.onUpdate(e) } {...this.props} />;
      break;
    case 'viability':
      phase = <CaptainEntryViability 
        bernieSupporters={this.state.bernieSupporters} 
        hillarySupporters={this.state.hillarySupporters} 
        martinSupporters={this.state.martinSupporters} 
        onUpdate={(e) => this.onUpdate(e) } {...this.props} />;
      break;
    case 'not_viable':
      phase = <CaptainEntryMessage message="Sorry, Bernie is not viable in your precinct." {...this.props} />;
      break;
    case 'apportionment':
      phase = <CaptainEntryApportionment 
        bernieSupporters={this.state.bernieSupporters} 
        hillarySupporters={this.state.hillarySupporters} 
        martinSupporters={this.state.martinSupporters} 
        onUpdate={(e) => this.onUpdate(e) } {...this.props} 
        {...this.props} />;
      break;
    case 'apportioned':
      phase = <CaptainEntryMessage message="Caucus has been completed. Thanks for your help!" {...this.props} />;
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
          <h1>Precinct: {this.props.captainPrecinct.precinct.name}</h1>
          <h3>Phase: {this.phaseText()}</h3>
          {this.phaseComponent()}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CaptainEntry);
