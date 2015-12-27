import React from 'react';

import './CaptainViabilityResults.scss';

var CaptainViabilityResults = React.createClass({

  render: function() {
    return (
      <div className="container-fluid text-center
                      viability-results">

        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <h1 className="viability-text">Bernie is Viable in your Precinct</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <p className="delegate-text">There are currently 2 delegates for Bernie</p>
            <p className="delegate-text">To get 1 more delegate you need 20 people</p>
            <p className="delegate-text">To get 2 more delegates you need 45 people</p>
          </div>
        </div>

      </div>
    );
  }

});

export default CaptainViabilityResults;
