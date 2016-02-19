import _                              from 'lodash';
import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  fetched: false,
  updated: false,
  error: false,
  audits: []
};

const audits = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, fetched: false});
    },
    success: (state, response) => {
      return reduceState(state, {fetched: true, audits: response.audits});
    },
    error: (state, error) => {
      return reduceState(state, {error: error, fetched: false});
    }
  },
  update: {
    request: (state) => {
      return reduceState(state, {error: false, updated: false});
    },
    success: (state, response) => {
      notifySuccess('Audit closed!');
      return reduceState(state, {audits: _.filter(state.audits, (audit) => audit.id !== response.audit.id), error: false, updated: true});
    },
    error: (state, error) => {
      notifyError('Audit update error.')
      return reduceState(state, {error: error});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_AUDITS_REQUEST]   : audits.get.request,
  [c.GET_AUDITS_SUCCESS]   : audits.get.success,
  [c.GET_AUDITS_FAILURE]   : audits.get.error,
  [c.UPDATE_AUDIT_REQUEST] : audits.update.request,
  [c.UPDATE_AUDIT_SUCCESS] : audits.update.success,
  [c.UPDATE_AUDIT_FAILURE] : audits.update.error
});
