import React from 'react';

var CaptainAttendeeInputs = React.createClass({

    render: function() {
        return (
            <div className="container-fluid">

              <div className="row">
                <div className="col-xs-3 col-xs-offset-2 text-center">
                  <div className="form-group">
                    <label>Caucus Attendees</label>
                    <input type="text"
                           className="form-control"
                           id="numAttendees">
                  </div>
                </div>
                <div className="col-xs-3 col-xs-offset-2 text-center">
                  <div className="form-group">
                    <label>Caucus Attendees For Bernie</label>
                    <input type="text"
                           className="form-control"
                           id="numForBernie">
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-3 col-xs-offset-2 text-center">
                  <div className="form-group">
                    <label>Caucus Attendees For OMalley</label>
                    <input type="text"
                           className="form-control"
                           id="numForOMalley">
                  </div>
                </div>
                <div className="col-xs-3 col-xs-offset-2 text-center">
                  <div className="form-group">
                    <label>Caucus Attendees For Clinton</label>
                    <input type="text"
                           className="form-control"
                           id="numForClinton">
                  </div>
                </div>
              </div>

            </div
        );
    }

});

export default CaptainAttendeeInputs;
