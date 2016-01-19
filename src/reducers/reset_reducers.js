import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/reset';

const initialState = {
  reset: false,
  password: '',
  passwordConfirmation: ''
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
  [c.RESET_REQUEST]    : reset.request,
  [c.RESET_SUCCESS]    : reset.success,
  [c.RESET_FAILURE]    : reset.failure,
  [c.SET_ATTR]         : reset.set
});
