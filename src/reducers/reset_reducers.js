import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/reset';

const initialState = {
  forgot: false,
  reset: false,
  email: '',
  password: '',
  passwordConfirmation: '',
  error: {}
};

const forgot = {
  request: function (state) {
    return reduceState(state, { forgot: false });
  },
  success: function (state) {
    notifySuccess('If your email matched one in the system, you have been sent a reset link.');
    return reduceState(state, { forgot: true });
  },
  failure: function (state, error) {
    notifyError('Password reset error.');
    return reduceState(state, { error: error, forgot: false });
  }
};

const reset = {
  request: function (state) {
    return reduceState(state, { reset: false });
  },
  success: function (state) {
    notifySuccess('Password reset successful! Please log in.');
    return reduceState(state, { reset: true });
  },
  failure: function (state, error) {
    notifyError('Password reset error.');
    return reduceState(state, { error: error, reset: false });
  },
  set: (state, payload) => {
    const newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  }
};

export default createReducer(initialState, {
  [c.FORGOT_REQUEST] : forgot.request,
  [c.FORGOT_SUCCESS] : forgot.success,
  [c.FORGOT_FAILURE] : forgot.failure,
  [c.RESET_REQUEST]  : reset.request,
  [c.RESET_SUCCESS]  : reset.success,
  [c.RESET_FAILURE]  : reset.failure,
  [c.SET_FORM_ATTR]  : reset.set
});
