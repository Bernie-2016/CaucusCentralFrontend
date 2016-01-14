import { createReducer, reduceState } from 'utils';
import * as c from 'constants/session';

const initialState = {
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  privilege: undefined,
  precinctId: undefined,
  token: undefined,
  fetching: false,
  destroying: false,
  created: false
};

const sign = {
  in: {
    request: function (state, payload) {
      return reduceState(state, {
        fetching: true,
        email: payload.email
      });
    },
    success: function (state, response) {
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
      return reduceState(state, { error: error, fetching: false });
    }
  },
  out: {
    request: function (state) {
      return reduceState(state, { destroying: true });
    },
    success: function (state) {
      return reduceState(state, initialState);
    },
    failure: function (state, error) {
      return reduceState(state, { error: error, destroying: false });
    }
  },
  up: {
    request: function (state) {
      return reduceState(state, { created: false });
    },
    success: function (state) {
      return reduceState(state, { created: true });
    },
    failure: function (state, error) {
      return reduceState(state, { error: error, created: false });
    }
  }
};

export default createReducer(initialState, {
  [c.SIGN_IN_REQUEST] : sign.in.request,
  [c.SIGN_IN_SUCCESS] : sign.in.success,
  [c.SIGN_IN_FAILURE] : sign.in.failure,
  [c.SIGN_OUT_REQUEST] : sign.out.request,
  [c.SIGN_OUT_SUCCESS] : sign.out.success,
  [c.SIGN_OUT_FAILURE] : sign.out.failure,
  [c.SIGN_UP_REQUEST] : sign.up.request,
  [c.SIGN_UP_SUCCESS] : sign.up.success,
  [c.SIGN_UP_FAILURE] : sign.up.failure
});

