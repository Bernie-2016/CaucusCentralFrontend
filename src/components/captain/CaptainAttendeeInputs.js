import React from 'react';

var CaptainAttendeeInputs = React.createClass({

    render: function() {
        return (
            <div className="container-fluid">

              <div className="row input-row">
                <div className="col-xs-5 col-xs-offset-1 text-center">
                  <div className="form-group">
                    <label>Caucus Attendees</label>
                    <input type="text"
                           className="form-control"
                           id="numAttendees"
                           placeholder="0" />
                  </div>
                </div>
                <div className="col-xs-5 text-center">
                  <div className="form-group">
                    <label>For Bernie</label>
                    <input type="text"
                           className="form-control"
                           id="numForBernie"
                           placeholder="0" /> 
                  </div>
                </div>
              </div>

              <div className="row input-row">
                <div className="col-xs-5 col-xs-offset-1 text-center">
                  <div className="form-group">
                    <label>For Hillary</label>
                    <input type="text"
                           className="form-control"
                           id="numForOMalley"
                           placeholder="0" />
                  </div>
                </div>
                <div className="col-xs-5 text-center">
                  <div className="form-group">
                    <label>For OMalley</label>
                    <input type="text"
                           className="form-control"
                           id="numForClinton"
                           placeholder="0" />
                  </div>
                </div>
              </div>

            </div>
        );
    }

});

export default CaptainAttendeeInputs;
