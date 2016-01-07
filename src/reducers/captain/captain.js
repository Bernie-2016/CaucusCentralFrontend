import { createReducer, reduceState } from '../../utils';
import * as c from 'constants/captain';
import _ from 'lodash';

const initialState = {
  viability: {
    isViable: false,
    attendees: 0,
    supporters: 0,
    toBecomeViable: 0,
    delegatesWon: 0,
    forOneMoreDelegate: 0,
    forTwoMoreDelegates: 0
  },
  precinct: {
    precinctId: 135,
    precinctName: '',
    totalDelegates: 0
  },
  fetchingTally: false
};

const calculateViability = function (attendees, supporters) {
  return (supporters / attendees) >= 0.15;
};

const calculateDelegates = function (attendees, supporters, availableDelegates) {
  return Math.floor((supporters / attendees) * availableDelegates);
};

const tallyAttendees = {
  request: function (state, payload) {
    if (__DEV__) {
      console.log('sending calculate payload');
      console.log(payload);
    }
    return reduceState(state, {
      viability: {
        isViable: calculateViability(state.viability.total_attendees, payload.bernie),
        delegatesWon: calculateDelegates(state.viability.total_attendees, payload.bernie, precinct.totalDelegates)
      },
      fetchingTally: true
    });
  },
  response: function (state, response) {
    const precinct = response.precinct;
    const bernie = _.find(precinct.delegate_counts, {'key': 'sanders'});
    return reduceState(state, {
      viability: {
        isViable: calculateViability(precinct.total_attendees, bernie.supporters),
        delegatesWon: calculateDelegates(precinct.total_attendees, bernie.supporters, precinct.totalDelegates)
      },
      fetchingTally: false
    });
  },
  failure: function (state, error) {
    if (__DEV__) {
      console.error('from reducer', error.payload);
    }
    return reduceState(state, {error:error, fetchingTally: false});
  }
};

export default createReducer(initialState, {
  [c.TALLY_ATTENDEES_REQUEST] : tallyAttendees.request,
  [c.TALLY_ATTENDEES_SUCCESS] : tallyAttendees.success,
  [c.TALLY_ATTENDEES_FAILURE] : tallyAttendees.failure
});

