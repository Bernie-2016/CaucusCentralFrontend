import { createReducer } from '../../utils';
import * as c from 'constants/captain';
import _ from 'lodash';

const calculateViability = function (attendees, supporters) {
  return (supporters / attendees) >= 0.15;
};

const calculateDelegates = function (attendees, supporters, availableDelegates) {
  return Math.floor((supporters / attendees) * availableDelegates);
};

const tallyAttendeesRequest = function (state, payload) {
  if (__DEV__) {
    console.log('sending calculate payload');
    console.log(payload);
  };
  return Object.assign({}, state, {
    // viability: {
    //   isViable: calculateViability(state.viability.total_attendees, bernie.supporters),
    //   delegatesWon: calculateDelegates(state.viability.total_attendees, bernie.supporters, precinct.totalDelegates)
    // },
    fetchingTally: true
  });
};

const tallyAttendeesSuccess = function (state, response) {
  const precinct = response.precinct;
  const bernie = _.find(precinct.delegate_counts, {'key': 'sanders'});
  return Object.assign({}, state, {
    viability: {
      isViable: calculateViability(precinct.total_attendees, bernie.supporters),
      delegatesWon: calculateDelegates(precinct.total_attendees, bernie.supporters, precinct.totalDelegates)
    },
    fetchingTally: false
  });
};

const tallyAttendeesFailure = function (state, error) {
  if (__DEV__) {
    console.error('from reducer', error.payload);
  }
  return Object.assign({}, state, {error:error, fetchingTally: false});
};

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
    totalDelegates: 0,
  },
  fetchingTally: false
};

export default createReducer(initialState, {
  [c.TALLY_ATTENDEES_REQUEST] : tallyAttendeesRequest,
  [c.TALLY_ATTENDEES_SUCCESS] : tallyAttendeesSuccess,
  [c.TALLY_ATTENDEES_FAILURE] : tallyAttendeesFailure
});

