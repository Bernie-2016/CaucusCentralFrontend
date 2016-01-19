import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  getting: false,
  fetched: false,
  updating: false,
  updated: false,
  error: false,
  name: '',
  county: '',
  phase: '',
  attendees: 0,
  delegates: 0,
  sandersSupporters: 0,
  clintonSupporters: 0,
  omalleySupporters: 0,
  threshold: 0,
  delegateCounts: []
};

const precinct = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false, getting: true });
    },
    success: (state, response) => {
      return reduceState(state, {
        error: false, 
        getting: false, 
        fetched: true, 
        name: response.precinct.name,
        county: response.precinct.county,
        phase: response.precinct.phase,
        attendees: response.precinct.total_attendees || 0,
        delegates: response.precinct.total_delegates || 0,
        sandersSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.precinct.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        threshold: response.precinct.threshold,
        delegateCounts: response.precinct.delegate_counts
      });
    },
    failure: (state, error) => {
      return reduceState(state, { error:error, getting: false });
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  update: {
    request: (state) => {
      return reduceState(state, { error: false, updated: false, updating: true });
    },
    success: (state, response) => {
      notifySuccess('Precinct updated!');
      return reduceState(state, {
        error: false, 
        updating: false, 
        updated: true, 
        name: response.precinct.name,
        county: response.precinct.county,
        phase: response.precinct.phase,
        attendees: response.precinct.total_attendees || 0,
        delegates: response.precinct.total_delegates || 0,
        sandersSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.precinct.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.precinct.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        threshold: response.precinct.threshold,
        delegateCounts: response.precinct.delegate_counts
      });
    },
    failure: (state, error) => {
      notifyError('Precinct update error.');
      return reduceState(state, { error:error, updating: false });
    }
  },
  reset: (state) => {
    return reduceState(state, {
      updated: false
    });
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCT_REQUEST]    : precinct.get.request,
  [c.GET_PRECINCT_SUCCESS]    : precinct.get.success,
  [c.GET_PRECINCT_ERROR]      : precinct.get.failure,
  [c.UPDATE_PRECINCT_REQUEST] : precinct.update.request,
  [c.UPDATE_PRECINCT_SUCCESS] : precinct.update.success,
  [c.UPDATE_PRECINCT_ERROR]   : precinct.update.failure,
  [c.SET_PRECINCT_ATTR]       : precinct.set,
  [c.RESET_PRECINCT]          : precinct.reset
});
