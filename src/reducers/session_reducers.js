import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/session';

const initialState = {
  error: false,
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  privilege: undefined,
  precinctId: undefined,
  token: undefined,
  fetching: false,
  destroying: false
};

const sign = {
  in: {
    request: function (state, payload) {
      return reduceState(state, {
        error: false,
        fetching: true,
        email: payload.email
      });
    },
    success: function (state, response) {
      notifySuccess('Logged in!');
      console.log(response.user.token);
      const session = {
        id: response.user.id,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        privilege: response.user.privilege,
        precinctId: response.user.precinct_id,
        token: response.user.token,
        fetching: false
      };
      return reduceState(state, session);
    },
    failure: function (state, error) {
      notifyError('Login error.');
      return reduceState(state, { error: error, fetching: false });
    }
  },
  out: {
    request: function (state) {
      return reduceState(state, { eror: false, destroying: true });
    },
    success: function (state) {
      notifySuccess('Logged out!');
      return reduceState(state, initialState);
    },
    failure: function (state) {
      return reduceState(state, initialState);
    }
  }
};

const set = (state, payload) => {
  const newState = {};
  newState[payload.key] = payload.value;
  return reduceState(state, newState);
};

export default createReducer(initialState, {
  [c.SIGN_IN_REQUEST]  : sign.in.request,
  [c.SIGN_IN_SUCCESS]  : sign.in.success,
  [c.SIGN_IN_FAILURE]  : sign.in.failure,
  [c.SIGN_OUT_REQUEST] : sign.out.request,
  [c.SIGN_OUT_SUCCESS] : sign.out.success,
  [c.SIGN_OUT_FAILURE] : sign.out.failure,
  [c.SET_ATTR]         : set
});
