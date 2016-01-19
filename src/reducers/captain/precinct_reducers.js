import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/captain';

const initialState = {
  gettingPrecinct: false,
  updatingPrecinct: false,
  fetched: false,
  error: false,
  precinct: {},
  attendees: 0,
  sandersSupporters: 0,
  clintonSupporters: 0,
  omalleySupporters: 0
};

const precinct = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, gettingPrecinct: true, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, {
        error: false, 
        gettingPrecinct: false, 
        fetched: true, 
        precinct: response.precinct,
        attendees: response.precinct.total_attendees || 0,
        sandersSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.precinct.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0
      });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error, gettingPrecinct: false});
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  update: {
    request: (state) => {
      return reduceState(state, { error: false, updatingPrecinct: true });
    },
    success: (state, response) => {
      notifySuccess('Precinct updated!')
      return reduceState(state, {
        error: false, 
        updatingPrecinct: false, 
        fetched: true, 
        precinct: response.precinct,
        attendees: response.precinct.total_attendees || 0,
        sandersSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.precinct.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0
      });
    },
    failure: (precinct, error) => {
      notifyError('Precinct update error.')
      return reduceState(precinct, {error:error, updatingPrecinct: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCT_REQUEST] : precinct.get.request,
  [c.GET_PRECINCT_SUCCESS] : precinct.get.success,
  [c.GET_PRECINCT_FAILURE]  : precinct.get.failure,
  [c.UPDATE_ATTENDEES_REQUEST] : precinct.update.request,
  [c.UPDATE_ATTENDEES_SUCCESS] : precinct.update.success,
  [c.UPDATE_ATTENDEES_FAILURE]  : precinct.update.failure,
  [c.UPDATE_VIABILITY_COUNTS_REQUEST] : precinct.update.request,
  [c.UPDATE_VIABILITY_COUNTS_SUCCESS] : precinct.update.success,
  [c.UPDATE_VIABILITY_COUNTS_FAILURE]  : precinct.update.failure,
  [c.UPDATE_APPORTIONMENT_COUNTS_REQUEST] : precinct.update.request,
  [c.UPDATE_APPORTIONMENT_COUNTS_SUCCESS] : precinct.update.success,
  [c.UPDATE_APPORTIONMENT_COUNTS_FAILURE]  : precinct.update.failure,
  [c.SET_ATTR] : precinct.set,
});

