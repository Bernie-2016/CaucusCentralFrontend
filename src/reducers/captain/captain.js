import { createReducer, reduceState } from '../../utils';
import * as c from 'constants/captain';
import { SIGN_IN_SUCCESS } from 'constants/session';
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
    id: undefined,
    name: '',
    county: '',
    totalDelegates: 0,
    phase: 'start',
    fetching: false
  },
  fetchingTally: false
};

const calculateViability = function (attendees, supporters) {
  return (supporters / attendees) >= 0.15;
};

const calculateDelegates = function (attendees, supporters, availableDelegates) {
  return Math.floor((supporters / attendees) * availableDelegates);
};

const precinct = {
  initialSet: function (state, response) {
    console.log('setting captain precinct!', JSON.stringify(response));
    return reduceState(state, {
      precinct: {
        precinctId: response.user.precinct_id
      }
    });
  },
  request: function (state) {
    console.log('fetching precinct', JSON.stringify(state));
    return reduceState(state, { fetching: true });
  },
  success: function (state, response) {
    console.log('response', JSON.stringify(response));
    const res = response.precinct;
    return reduceState(state, {
      precinct: {
        id: res.id,
        name: res.name,
        county: res.county,
        totalDelegates: res.total_delegates,
        phase: res.phase,
        fetching: false
      }
    });
  },
  failure: function (state, error) {
    return reduceState(state, { error: error, fetching: false });
  },
  calculateTotals: function (state, payload) {
    const changes = {};
    changes.something = payload.something;
    return reduceState(state, changes);
  }
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
  success: function (state, response) {
    const resPrecinct = response.precinct;
    const bernie = _.find(resPrecinct.delegate_counts, {'key': 'sanders'});
    return reduceState(state, {
      viability: {
        isViable: calculateViability(resPrecinct.total_attendees, bernie.supporters),
        delegatesWon: calculateDelegates(resPrecinct.total_attendees, bernie.supporters, resPrecinct.totalDelegates)
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
  [SIGN_IN_SUCCESS]             : precinct.initialSet,
  [c.PRECINCT_REQUEST]          : precinct.request,
  [c.PRECINCT_SUCCESS]          : precinct.success,
  [c.PRECINCT_FAIURE]           : precinct.failure,
  [c.CALCULATE_TOTALS]          : precinct.calculateTotals,
  [c.TALLY_ATTENDEES_REQUEST]   : tallyAttendees.request,
  [c.TALLY_ATTENDEES_SUCCESS]   : tallyAttendees.success,
  [c.TALLY_ATTENDEES_FAILURE]   : tallyAttendees.failure
});

