import React from 'react';

const intIfValid = function (value) {
  if (value) {
    return parseInt(value);
  } else {
    return 0;
  }
};

const CaptainAttendeeInputs = React.createClass({
  handleChange: function (evt) {
    const attendees = this.refs.numAttendees;
    const forBernie = this.refs.numForBernie;
    const forHillary = this.refs.numForHillary;
    const forOmalley = this.refs.numForOMalley;

    const payload = {
      precinctId: this.props.precinctId,
      attendees: intIfValid(attendees.value.trim()),
      candidates: {
        bernie: intIfValid(forBernie.value.trim()),
        hillary: intIfValid(forHillary.value.trim()),
        omalley: intIfValid(forOmalley.value.trim())
      }
    };

    if (__DEV__) {
      console.log('From component');
      console.log(evt);
      console.log(payload);
    }

    this.props.actions.tallyAttendees(payload);
  },

  render: function () {
    if (__DEV__) {
      console.log(this.props);
    }
    return (
      <div className='container-fluid attendee-inputs'>

              <div className='row input-row'>
                <div className='col-xs-5 col-xs-offset-1 text-center'>
                  <div className='form-group'>
                    <label>Caucus Attendees</label>
                    <input type='number'
                           className='form-control'
                           id='numAttendees'
                           ref='numAttendees'
                           placeholder='0'
                           type='number'
                           onChange={evt => this.handleChange(evt)} />
                  </div>
                </div>
                <div className='col-xs-5 text-center'>
                  <div className='form-group'>
                    <label>For Bernie</label>
                    <input type='number'
                           className='form-control'
                           id='numForBernie'
                           ref='numForBernie'
                           placeholder='0'
                           type='number'
                           onChange={evt => this.handleChange(evt)} />
                  </div>
                </div>
              </div>

              <div className='row input-row'>
                <div className='col-xs-5 col-xs-offset-1 text-center'>
                  <div className='form-group'>
                    <label>For Hillary</label>
                    <input type='number'
                           className='form-control'
                           id='numForHillary'
                           ref='numForHillary'
                           placeholder='0'
                           type='number'
                           onChange={evt => this.handleChange(evt)} />
                  </div>
                </div>
                <div className='col-xs-5 text-center'>
                  <div className='form-group'>
                    <label>For OMalley</label>
                    <input type='number'
                           className='form-control'
                           id='numForOMalley'
                           ref='numForOMalley'
                           placeholder='0'
                           type='number'
                           onChange={evt => this.handleChange(evt)} />
                  </div>
                </div>
              </div>

            </div>
      );
  }

});

export default CaptainAttendeeInputs;