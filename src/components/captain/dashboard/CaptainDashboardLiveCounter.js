import React from 'react';

class CaptainDashboardLiveCounter extends React.component {

    render() {
        return (
            <span className="glyphicon glyphicon-chevron-up counter-button" aria-hidden="true"></span>
            <span className="counter-text">
            { this.props.counter_value }
            </span>
            <span className="glyphicon glyphicon-chevron-down counter-button" aria-hidden="true"></span>
        );
    }

}

export default CaptainDashboardLiveCounter;
