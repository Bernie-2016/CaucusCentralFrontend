import _                              from 'lodash';
import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/report';

const initialState = {
  county: '',
  precinctId: '',
  attendees: 0,
  phase: '',
  sandersSupporters: 0,
  clintonSupporters: 0,
  omalleySupporters: 0,
  uncommittedSupporters: 0,
  sandersDelegates: 0,
  clintonDelegates: 0,
  omalleyDelegates: 0,
  uncommittedDelegates: 0,
  error: false,
  fetched: false,
  created: false,
  updated: false,
  removed: false
};

const report = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, {
        fetched: true,
        precinctId: response.report.precinct_id,
        attendees: response.report.total_attendees,
        phase: response.report.phase,
        sandersSupporters: (_.find(response.report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        uncommittedSupporters: (_.find(response.report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0
      });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error });
    }
  },
  create: {
    request: function (state) {
      return reduceState(state, { error: false, created: false });
    },
    success: function (state, response) {
      notifySuccess('Report successfully sent!');
      return reduceState(state, {
        created: true,
        precinctId: response.report.precinct_id,
        attendees: response.report.total_attendees,
        phase: response.report.phase,
        sandersSupporters: (_.find(response.report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        uncommittedSupporters: (_.find(response.report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0
      });
    },
    failure: function (state, error) {
      notifyError('Report error.');
      return reduceState(state, { error: error });
    }
  },
  update: {
    request: function (state) {
      return reduceState(state, { error: false, updated: false });
    },
    success: function (state, response) {
      notifySuccess('Report updated!');
      return reduceState(state, {
        updated: true,
        precinctId: response.report.precinct_id,
        attendees: response.report.total_attendees,
        phase: response.report.phase,
        sandersSupporters: (_.find(response.report.delegate_counts || [], {key: 'sanders'}) || {}).supporters || 0,
        clintonSupporters: (_.find(response.report.delegate_counts || [], {key: 'clinton'}) || {}).supporters || 0,
        omalleySupporters: (_.find(response.report.delegate_counts || [], {key: 'omalley'}) || {}).supporters || 0,
        uncommittedSupporters: (_.find(response.report.delegate_counts || [], {key: 'uncommitted'}) || {}).supporters || 0
      });
    },
    failure: function (state, error) {
      notifyError('Report update error.');
      return reduceState(state, { error: error });
    }
  },
  remove: {
    request: (state) => {
      return reduceState(state, { error: false, removed: false });
    },
    success: (state) => {
      notifySuccess('Report removed!');
      return reduceState(state, { removed: true });
    },
    failure: (state, error) => {
      notifyError('Report removal error.');
      return reduceState(state, { error: error });
    }
  }
};

const set = (state, payload) => {
  const newState = {};
  newState[payload.key] = payload.value;
  return reduceState(state, newState);
};

const reset = (state) => {
  return reduceState(state, initialState);
};

export default createReducer(initialState, {
  [c.GET_REPORT_REQUEST]  : report.get.request,
  [c.GET_REPORT_SUCCESS]  : report.get.success,
  [c.GET_REPORT_FAILURE]  : report.get.failure,
  [c.CREATE_REPORT_REQUEST]  : report.create.request,
  [c.CREATE_REPORT_SUCCESS]  : report.create.success,
  [c.CREATE_REPORT_FAILURE]  : report.create.failure,
  [c.UPDATE_REPORT_REQUEST]  : report.update.request,
  [c.UPDATE_REPORT_SUCCESS]  : report.update.success,
  [c.UPDATE_REPORT_FAILURE]  : report.update.failure,
  [c.REMOVE_REPORT_REQUEST]  : report.remove.request,
  [c.REMOVE_REPORT_SUCCESS]  : report.remove.success,
  [c.REMOVE_REPORT_FAILURE]  : report.remove.failure,
  [c.SET_ATTR]         : set,
  [c.RESET]            : reset
});
