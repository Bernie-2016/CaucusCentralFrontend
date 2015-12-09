import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain_actions';
import CaptainDashboardLiveCounter from 'components/captain/dashboard/CaptainDashboardLiveCounter';

const mapStateToProps = (state) => ({
  person_counter: state.liveCounter,
  routerState: state.router,
  attendee_count: 47,
  precinct_name: 'Altoona 4'
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(captainActions, dispatch)
});

var CaptainDashboardLiveView = React.createClass({

  render: function() {
    return (
      <div className="container text-center">

        {/* Viability status header */}
        <div className="row">
          <div className="col-xs-12">
          {/* Viablility Status Component Goes Here */}
          </div>
        </div>

        {/* Precinct and amount of attendees */}
        <div className="row">

          <div className="col-xs-6 text-left">
            <span>{this.props.precinct_name}</span>
          </div>

          <div className="col-xs-6 text-right">
            <span>{this.props.attendee_count} attendees</span>
          </div>

        </div>

        {/*}
          Person counter and calculation results
          components go here
        */}
        <div className="row">
          <CaptainDashboardLiveCounter
            counterValue={ this.props.person_counter }
            actions={{
              increment: this.props.actions.increment_person_counter,
              decrement: this.props.actions.decrement_person_counter
            }}
          />
        </div>
        
      </div>
    );
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(CaptainDashboardLiveView);
