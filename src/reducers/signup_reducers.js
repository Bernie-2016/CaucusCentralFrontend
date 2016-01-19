import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/session';

const initialState = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  passwordConfirmation: undefined,
  creating: false,
  created: false
};

const sign = {
  up: {
    request: function (state) {
      return reduceState(state, { creating: true, created: false });
    },
    success: function (state) {
      notifySuccess('Signup successful! Please log in.');
      return reduceState(state, { creating: false, created: true });
    },
    failure: function (state, error) {
      notifyError('Signup error.');
      return reduceState(state, { error: error, created: false });
    }
  }
};

const set = (state, payload) => {
  const newState = {};
  newState[payload.key] = payload.value;
  return reduceState(state, newState);
};

export default createReducer(initialState, {
  [c.SIGN_UP_REQUEST]  : sign.up.request,
  [c.SIGN_UP_SUCCESS]  : sign.up.success,
  [c.SIGN_UP_FAILURE]  : sign.up.failure,
  [c.SET_ATTR]         : set
});
