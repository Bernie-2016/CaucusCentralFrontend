import React from 'react';
import './CaptainDashboardLiveCounter.scss';

var CaptainDashboardLiveCounter = React.createClass({
    
    render: function() {
        return (
            <div className="col-xs-5 text-center">
              <span className="glyphicon glyphicon-chevron-up
                               counter-button"
                    aria-hidden="true"
                    onClick={this.props.actions.increment}>
              </span>
              <br />
              <div className="counter-text">{ this.props.counterValue }</div>
              <br />
              <span className="glyphicon glyphicon-chevron-down
                               counter-button"
                    aria-hidden="true"
                    onClick={this.props.actions.decrement}>
              </span>
            </div>
        );
    }

});

export default CaptainDashboardLiveCounter;
