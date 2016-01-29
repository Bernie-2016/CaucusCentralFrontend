import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  fetched: false,
  updated: false,
  error: false,
  state: '',
  name: '',
  county: '',
  delegates: 0,
  captainId: '',
  captainName: '',
  reports: []
};

const precinct = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, {
        fetched: true, 
        state: response.precinct.state,
        name: response.precinct.name,
        county: response.precinct.county,
        delegates: response.precinct.total_delegates || 0,
        captainId: response.precinct.captain_id,
        captainName: response.precinct.captain_first_name + ' ' + response.precinct.captain_last_name,
        reports: _.map(response.precinct.reports, (report) => ({
          id: report.id,
          source: report.source,
          phase: report.phase,
          attendees: report.total_attendees,
          threshold: report.threshold,
          sandersSupporters: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
          clintonSupporters: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
          omalleySupporters: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
          uncommittedSupporters: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0,
          sandersDelegates: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).delegates_won || 'N/A',
          clintonDelegates: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).delegates_won || 'N/A',
          omalleyDelegates: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).delegates_won || 'N/A',
          uncommittedDelegates: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).delegates_won || 'N/A'
        }))
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
      return reduceState(state, { error: false, updated: false, updating: true });
    },
    success: (state, response) => {
      notifySuccess('Precinct updated!');
      return reduceState(state, {
        error: false, 
        updated: true, 
        state: response.precinct.state,
        name: response.precinct.name,
        county: response.precinct.county,
        delegates: response.precinct.total_delegates || 0,
        captainId: response.precinct.captain_id,
        captainName: response.precinct.captain_first_name + ' ' + response.precinct.captain_last_name,
        reports: _.map(response.precinct.reports, (report) => ({
          source: report.source,
          phase: report.phase,
          attendees: report.total_attendees,
          threshold: report.threshold,
          sandersSupporters: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
          clintonSupporters: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
          omalleySupporters: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
          uncommittedSupporters: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0,
          sandersDelegates: (_.find(report.delegate_counts || [], {key: 'sanders'}) || {}).delegates_won || 0,
          clintonDelegates: (_.find(report.delegate_counts || [], {key: 'clinton'}) || {}).delegates_won || 0,
          omalleyDelegates: (_.find(report.delegate_counts || [], {key: 'omalley'}) || {}).delegates_won || 0,
          uncommittedDelegates: (_.find(report.delegate_counts || [], {key: 'uncommitted'}) || {}).delegates_won || 0
        }))
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
  [c.GET_PRECINCT_FAILURE]    : precinct.get.failure,
  [c.UPDATE_PRECINCT_REQUEST] : precinct.update.request,
  [c.UPDATE_PRECINCT_SUCCESS] : precinct.update.success,
  [c.UPDATE_PRECINCT_FAILURE] : precinct.update.failure,
  [c.SET_PRECINCT_ATTR]       : precinct.set,
  [c.RESET_PRECINCT]          : precinct.reset
});
