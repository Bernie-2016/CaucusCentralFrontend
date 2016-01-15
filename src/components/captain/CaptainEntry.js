import React from 'react';
import { bindActionCreators }    from 'redux';
import { connect }               from 'react-redux';
import CaptainEntryApportionment from './CaptainEntryApportionment';
import CaptainEntryAttendees     from './CaptainEntryAttendees';
import CaptainEntryMessage       from './CaptainEntryMessage';
import CaptainEntryViability     from './CaptainEntryViability';
import captainActions            from 'actions/captain/';
import { phaseText }             from 'utils/phaseText';

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
      viabilitySupporters: 0,
      awaitingLoad: true
    };
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = parseInt(e.target.value);
    this.setState(newState);
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

  componentWillMount () {
    this.props.actions.getPrecinct({id: this.props.session.precinctId, token: this.props.session.token});
  }

  componentDidUpdate () {
    if(this.props.captainPrecinct.fetched && this.state.awaitingLoad) {
      let bernieSupporters = 0;
      let hillarySupporters = 0;
      let martinSupporters = 0;
      if(this.props.captainPrecinct.precinct.delegate_counts !== undefined) {
        bernieSupporters = _.find(this.props.captainPrecinct.precinct.delegate_counts, {key: 'sanders'}).supporters || 0;
        hillarySupporters = _.find(this.props.captainPrecinct.precinct.delegate_counts, {key: 'clinton'}).supporters || 0;
        martinSupporters = _.find(this.props.captainPrecinct.precinct.delegate_counts, {key: 'omalley'}).supporters || 0;
      }
      this.setState({
        awaitingLoad: false,
        attendees: this.props.captainPrecinct.precinct.total_attendees || 0,
        bernieSupporters: bernieSupporters,
        hillarySupporters: hillarySupporters,
        martinSupporters: martinSupporters,
        viabilitySupporters: this.props.captainPrecinct.precinct.threshold || 0
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Precinct: {this.props.captainPrecinct.precinct.name}</h1>
          <h3>Phase: {phaseText(this.props.captainPrecinct.precinct.phase)}</h3>
          {this.phaseComponent()}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CaptainEntry);
