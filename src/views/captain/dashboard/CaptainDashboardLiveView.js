import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain_actions';

const mapStateToProps = (state) => ({
  person_counter: state.person_counter,
  routerState: state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(captainActions, dispatch)
});
class CaptainDashboardLiveView extends React.Component {

  getInitialState() {
    return {
      attendee_count: 47,
      precinct_name: 'Altoona 4'
    }
  }

  render () {
    return (
      <div className="container text-center">

        // Viability status header
        <div className="row">
          <div className="col-xs-12">
          // Viablility Status Component Goes Here
          </div>
        </div>

        // Precinct and amount of attendees
        <div className="row">

          <div className="col-xs-6 text-left">
            <h3>{ this.state.precinct_name }</h3>
          </div>

          <div className="col-xs-6 text-right">
            <h3>{ this.state.attendee_count } attendees</h3>
          </div>

        </div>

        // Person counter and calculation results
        // components go here
        <div className="row">
          // "here"
        </div>
        
      </div>
    );
  }

}