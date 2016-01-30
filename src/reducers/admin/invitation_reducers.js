import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  error: false,
  fetched: false,
  created: false,
  resent: false,
  newEmail: '',
  precinctId: '',
  privilege: 'captain',
  invitations: []
};

const invitation = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, fetched: false});
    },
    success: (state, response) => {
      return reduceState(state, {fetched: true, invitations: response.invitations});
    },
    error: (state, error) => {
      return reduceState(state, {error: error});
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  create: {
    request: (state) => {
      return reduceState(state, { error: false, created: false });
    },
    success: (state, response) => {
      notifySuccess('User invited!')
      return reduceState(state, { created: true });
    },
    error: (state, error) => {
      notifyError('User invite error.')
      return reduceState(state, { error: error });
    }
  },
  resend: {
    request: (state) => {
      return reduceState(state, { error: false, resent: false });
    },
    success: (state, response) => {
      notifySuccess('Invitation resent!')
      return reduceState(state, { resent: true });
    },
    error: (state, error) => {
      notifyError('Resend error.')
      return reduceState(state, { error: error });
    }
  },
  reset: (state) => {
    return reduceState(state, initialState);
  }
};

export default createReducer(initialState, {
  [c.GET_INVITATIONS_REQUEST]   : invitation.get.request,
  [c.GET_INVITATIONS_SUCCESS]   : invitation.get.success,
  [c.GET_INVITATIONS_FAILURE]   : invitation.get.error,
  [c.CREATE_INVITATION_REQUEST] : invitation.create.request,
  [c.CREATE_INVITATION_SUCCESS] : invitation.create.success,
  [c.CREATE_INVITATION_FAILURE] : invitation.create.error,
  [c.RESEND_INVITATION_REQUEST] : invitation.resend.request,
  [c.RESEND_INVITATION_SUCCESS] : invitation.resend.success,
  [c.RESEND_INVITATION_FAILURE] : invitation.resend.error,
  [c.SET_INVITATION_ATTR]       : invitation.set,
  [c.RESET_INVITATION]          : invitation.reset
});
