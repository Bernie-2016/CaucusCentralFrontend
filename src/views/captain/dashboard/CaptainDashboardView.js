import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain_actions';

import CaptainAttendeeInputs  from 'components/captain/CaptainAttendeeInputs';
import CaptainViabilityResults from 'components/captain/CaptainViabilityResults';

import './CaptainDashboard.scss';

const mapStateToProps = (state) => ({
  routerState: state.router,
  precinct_id: 4,
  precinct_name: 'Altoona',
  total_delegates: 4,
  is_viable: state.calculateViability.is_viable,
  to_become_viable: state.calculateViability.to_become_viable,
  delegate_count: state.calculateViability.delegate_count,
  for_one_more: state.calculateViability.for_one_more,
  for_two_more: state.calculateViability.for_two_more
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
                <span className="precinct-data-item">{ this.props.precinct_id } { this.props.precinct_name }</span>
              </div>
              <div className="col-xs-6 text-right">
                <span className="precinct-data-item">{ this.props.total_delegates } Delegates</span>
              </div>
            </div>

            {/* Insert Viability Component Here */}
            <div className="row">
              <CaptainViabilityResults { ...this.props } />
            </div>

            <div className="row">
              <CaptainAttendeeInputs { ...this.props }/>
            </div>

          </div>
        );
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(CaptainDashboardView);
