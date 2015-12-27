import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain_actions';

import CaptainAttendeeInputs  from 'components/captain/CaptainAttendeeInputs';
import CaptainViabilityResults from 'components/captain/CaptainViabilityResults';

import './CaptainDashboard.scss';

const mapStateToProps = (state) => ({
  routerState: state.router,
  precinct_name: 'Altoona 4',
  total_delegates: 4,
  is_viable: true,
  delegate_count: 2,
  for_one_more: 20,
  for_two_more: 45
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(captainActions, dispatch)
});

var CaptainDashboardView = React.createClass({

  render: function() {
        return (
          <div className="container-fluid dashboard-body">

            <div className="row precinct-data-row">
              <div className="col-xs-6 text-left">
                <span className="precinct-data-item">{ this.props.precinct_name }</span>
              </div>
              <div className="col-xs-6 text-right">
                <span className="precinct-data-item">{ this.props.total_delegates } Delegates</span>
              </div>
            </div>

            {/* Insert Viability Component Here */}
            <div className="row">
              <CaptainViabilityResults 
                viable={ this.props.is_viable }
                delegates={ this.props.delegate_count }
                oneMore={ this.props.for_one_more }
                twoMore={ this.props.for_two_more }
              />
            </div>

            <div className="row">
              <CaptainAttendeeInputs
                actions={{
                  tally_attendees: this.props.actions.tally_attendees
                }} />
            </div>

          </div>
        );
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(CaptainDashboardView);
