import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/report';

const initialState = {
  precinctId: null,
  attendees: 0,
  phase: '',
  sandersSupporters: 0,
  clintonSupporters: 0,
  omalleySupporters: 0,
  created: false
};

const report = {
  create: {
    request: function (state) {
      return reduceState(state, { created: false });
    },
    success: function (state) {
      notifySuccess('Report successfully sent!');
      return reduceState(state, { created: true });
    },
    failure: function (state, error) {
      notifyError('Report error.');
      return reduceState(state, { error: error, created: false });
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
  [c.CREATE_REPORT_REQUEST]  : report.create.request,
  [c.CREATE_REPORT_SUCCESS]  : report.create.success,
  [c.CREATE_REPORT_FAILURE]  : report.create.failure,
  [c.SET_ATTR]         : set,
  [c.RESET]            : reset
});
