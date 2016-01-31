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
  sandersViable: false,
  clintonViable: false,
  omalleyViable: false,
  uncommittedViable: false,
  sandersSupporters: 0,
  clintonSupporters: 0,
  omalleySupporters: 0,
  uncommittedSupporters: 0,
  sandersDelegates: 0,
  clintonDelegates: 0,
  omalleyDelegates: 0,
  uncommittedDelegates: 0,
  delegatesWon: 0,
  extra: false,
  flipWinner: ''
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
        sandersViable: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).viable || false,
        clintonViable: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).viable || false,
        omalleyViable: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).viable || false,
        uncommittedViable: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).viable || false,
        sandersSupporters: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        uncommittedSupporters: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0,
        sandersDelegates: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).delegates_won || null,
        clintonDelegates: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).delegates_won || null,
        omalleyDelegates: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).delegates_won || null,
        uncommittedDelegates: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).delegates_won || null,
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
        sandersViable: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).viable || false,
        clintonViable: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).viable || false,
        omalleyViable: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).viable || false,
        uncommittedViable: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).viable || false,
        sandersSupporters: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        uncommittedSupporters: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0,
        sandersDelegates: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).delegates_won || null,
        clintonDelegates: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).delegates_won || null,
        omalleyDelegates: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).delegates_won || null,
        uncommittedDelegates: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).delegates_won || null,
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
  [c.UPDATE_FLIP_WINNER_REQUEST] : precinct.update.request,
  [c.UPDATE_FLIP_WINNER_SUCCESS] : precinct.update.success,
  [c.UPDATE_FLIP_WINNER_FAILURE]  : precinct.update.failure,
  [c.SET_ATTR] : precinct.set,
});
