import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import captainActions         from 'actions/captain_actions';
import CaptainAttendeeInputs  from 'components/captain/CaptainAttendeeInputs';

import './CaptainDashboard.scss';

const mapStateToProps = (state) => ({
  routerState: state.router,
  precinct_name: 'Altoona 4',
  total_delegates: 4
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(captainActions, dispatch)
});

var CaptainDashboardView = React.createClass({

    render: function() {
        return (
          <div className="container-fluid">

            <div className="row">
              <div className="col-xs-6 text-left">
                { this.props.precinct_name }
              </div>
              <div className="col-xs-6 text-right">
                { this.props.total_delegates }
              </div>
            </div>

            {/* Insert Viability Component Here */}

            <div className="row">
              <CaptainAttendeeInputs />
            </div>

          </div>
        );
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(CaptainDashboardView);
