import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain_actions';

import CaptainAttendeeInputs  from 'components/captain/CaptainAttendeeInputs';
import CaptainViabilityResults from 'components/captain/CaptainViabilityResults';

import './CaptainDashboard.scss';

const mapStateToProps = (state) => ({
  routerState: state.router,
  precinctId: state.captain.precinct.precinctId,
  precinctName: state.captain.precinct.precinctName,
  totalDelegates: state.captain.precinct.totalDelegates,
  isViable: state.captain.viability.isViable,
  toBecomeViable: state.captain.viability.toBecomeViable,
  delegatesWon: state.captain.viability.delegatesWon,
  forOneMoreDelegate: state.captain.viability.forOneMoreDelegate,
  forTwoMoreDelegates: state.captain.viability.forTwoMoreDelegates
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(captainActions, dispatch)
});

const CaptainDashboardView = React.createClass({

  componentWillMount: function () {
    this.props.actions.getCurrentTotals(this.props.precinctId);
  },

  render: function () {
        return (
          <div className="container-fluid dashboard-body">

            <div className="row precinct-data-row">
              <div className="col-xs-6 text-left">
                <span className="precinct-data-item">{ this.props.precinctId } { this.props.precinctName }</span>
              </div>
              <div className="col-xs-6 text-right">
                <span className="precinct-data-item">{ this.props.totalDelegates } Delegates</span>
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
