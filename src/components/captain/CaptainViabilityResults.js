import React from 'react';

import './CaptainViabilityResults.scss';

var CaptainViabilityResults = React.createClass({

  render: function() {
    var viable = <span>Viable</span>;
    var to_become_viable;

    if (!this.props.isViable) {
      viable = <span>not Viable</span>;
    }

    if (this.props.toBecomeViable) {
      console.log('Need more peeps');
      to_become_viable = <p className="delegate-text">To become viable you need {this.props.toBecomeViable} more people</p>
    }

    return (
      <div className="container-fluid text-center
                      viability-results">

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1 className="viability-text">Bernie is { viable } in your Precinct</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            { to_become_viable }
            <p className="delegate-text">There are currently { parseInt(this.props.delegatesWon) || 0 } delegates for Bernie</p>
            <p className="delegate-text">To get 1 more delegate you need { this.props.forOneMoreDelegate } people</p>
            <p className="delegate-text">To get 2 more delegates you need { this.props.forTwoMoreDelegates } people</p>
          </div>
        </div>

      </div>
    );
  }

});

export default CaptainViabilityResults;
