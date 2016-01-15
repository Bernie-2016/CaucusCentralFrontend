import React from 'react';
import PrecinctEditForm from './PrecinctEditForm';

export class PrecinctEditFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingLoad: true,
      name: '',
      county: '',
      phase: '',
      totalAttendees: '',
      totalDelegates: '',
      bernieSupporters: 0,
      hillarySupporters: 0,
      martinSupporters: 0
    }
  }

  onUpdate(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    let { id } = this.props.params;
    this.props.actions.updatePrecinct({
      token: this.props.session.token,
      id: id,
      precinct: {
        name: this.state.name,
        county: this.state.county,
        phase: this.state.phase,
        total_attendees: this.state.attendees,
        total_delegates: this.state.delegates,
        delegate_counts: [
          {
            key: 'sanders',
            supporters: this.state.bernieSupporters
          },
          {
            key: 'clinton',
            supporters: this.state.hillarySupporters
          },
          {
            key: 'omalley',
            supporters: this.state.martinSupporters
          }
        ]
      }
    });
  }

  componentWillMount () {
    this.redirectToPrecinctIfUpdated();
    let { id } = this.props.params;
    this.props.actions.getPrecinct({id: id, token: this.props.session.token});
  }

  componentDidUpdate () {
    if(this.props.adminPrecincts.fetchedPrecinct && this.state.awaitingLoad) {
      let bernieSupporters = 0;
      let hillarySupporters = 0;
      let martinSupporters = 0;
      if(this.props.adminPrecincts.precinct.delegate_counts !== undefined) {
        bernieSupporters = _.find(this.props.adminPrecincts.precinct.delegate_counts, {key: 'sanders'}).supporters || 0;
        hillarySupporters = _.find(this.props.adminPrecincts.precinct.delegate_counts, {key: 'clinton'}).supporters || 0;
        martinSupporters = _.find(this.props.adminPrecincts.precinct.delegate_counts, {key: 'omalley'}).supporters || 0;
      }
      this.setState({
        awaitingLoad: false,
        name: this.props.adminPrecincts.precinct.name,
        county: this.props.adminPrecincts.precinct.county,
        phase: this.props.adminPrecincts.precinct.phase,
        attendees: this.props.adminPrecincts.precinct.total_attendees || 0,
        delegates: this.props.adminPrecincts.precinct.total_delegates,
        bernieSupporters: bernieSupporters,
        hillarySupporters: hillarySupporters,
        martinSupporters: martinSupporters
      });
    }
    this.redirectToPrecinctIfUpdated();
  }

  redirectToPrecinctIfUpdated () {
    if (this.props.adminPrecincts.updatedPrecinct) {
      this.props.history.pushState(null, this.props.location.pathname.replace('/edit', ''));
    }
  }

  render() {
    return (
      <div className="row">
        <div className=".col-md-12">
          <h1>Edit Precinct</h1>
          <p>Use this form to override precinct data if a volunteer reports an error.</p>
          <PrecinctEditForm 
            name={this.state.name} 
            county={this.state.county} 
            phase={this.state.phase} 
            attendees={this.state.attendees} 
            delegates={this.state.delegates} 
            bernieSupporters={this.state.bernieSupporters} 
            hillarySupporters={this.state.hillarySupporters} 
            martinSupporters={this.state.martinSupporters} 
            onUpdate={ (e) => this.onUpdate(e) } 
            onSubmit={ (e) => this.onSubmit(e) } 
            {...this.props} />
        </div>
      </div>
    );
  }
};

export default PrecinctEditFormContainer;
