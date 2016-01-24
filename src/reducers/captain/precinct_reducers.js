import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/captain';

const initialState = {
  fetched: false,
  error: false,
  name: '',
  county: '',
  delegates: 0,
  attendees: 0,
  threshold: 0,
  sandersSupporters: 0,
  clintonSupporters: 0,
  omalleySupporters: 0,
  delegatesWon: 0
};

const precinct = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      const report = response.precinct.reports[0] || {};
      return reduceState(state, {
        error: false, 
        fetched: true,
        name: response.precinct.name,
        county: response.precinct.county,
        delegates: response.precinct.total_delegates || 0,
        phase: report.phase,
        attendees: report.total_attendees || 0,
        threshold: report.threshold || 0,
        sandersSupporters: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        delegatesWon: report.delegates_won || 0
      });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error });
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  update: {
    request: (state) => {
      return reduceState(state, { error: false });
    },
    success: (state, response) => {
      notifySuccess('Precinct updated!')
      const report = response.precinct.reports[0] || {};
      return reduceState(state, {
        error: false, 
        fetched: true,
        name: response.precinct.name,
        county: response.precinct.county,
        delegates: response.precinct.total_delegates || 0,
        phase: report.phase,
        attendees: report.total_attendees || 0,
        threshold: report.threshold || 0,
        sandersSupporters: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        delegatesWon: report.delegates_won || 0
      });
    },
    failure: (precinct, error) => {
      notifyError('Precinct update error.')
      return reduceState(precinct, { error:error });
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
