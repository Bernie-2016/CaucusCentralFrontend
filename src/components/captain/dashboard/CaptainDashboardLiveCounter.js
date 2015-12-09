import React from 'react';

class CaptainDashboardLiveCounter extends React.component {

    render() {
        return (
            <span className="glyphicon glyphicon-chevron-up counter-button" aria-hidden="true"
                onClick={this.props.actions.increment}></span>
            <span className="counter-text">
            { this.props.counter_value }
            </span>
            <span className="glyphicon glyphicon-chevron-down counter-button" aria-hidden="true"
                onClick={this.props.actions.decrement}></span>
        );
    }

}

export default CaptainDashboardLiveCounter;
