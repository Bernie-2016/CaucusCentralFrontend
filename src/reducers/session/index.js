import { createReducer, reduceState } from 'utils';
import * as c from 'constants/session';

const initialState = (function () {
  const get = (key) => {
    const item = window.sessionStorage.getItem(key);
    if (!item) {
      return undefined;
    }
    return item;
  };
  return {
    id: get('id'),
    firstName: get('firstName'),
    lastName: get('lastName'),
    email: get('email'),
    privilege: get('privilege'),
    token: get('token'),
    fetching: false,
    destroying: false
  };
})();

const storeSession = function (session) {
  const store = (key, val) => {
    window.sessionStorage.setItem(key, val);
  };
  store('id', session.id);
  store('firstName', session.firstName);
  store('lastName', session.lastName);
  store('privilege', session.privilege);
  store('token', session.token);
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
        token: response.user.token,
        fetching: false
      };
      storeSession(session);
      return reduceState(state, session);
    },
    failure: function (state, error) {
      return reduceState(state, { error: error, fetching: false });
    }
  },
  out: {
    request: function (state) {
      console.log('destroying session');
      return reduceState(state, { destroying: true });
    },
    success: function (state) {
      console.log('session destroyed');
      window.sessionStorage.removeItem('token');
      return reduceState(state, initialState);
    },
    failure: function (state, error) {
      return reduceState(state, { error: error, destroying: false });
    }
  }
};

export default createReducer(initialState, {
  [c.SIGN_IN_REQUEST] : sign.in.request,
  [c.SIGN_IN_SUCCESS] : sign.in.success,
  [c.SIGN_IN_FAILURE] : sign.in.failure,
  [c.SIGN_OUT_REQUEST] : sign.out.request,
  [c.SIGN_OUT_SUCCESS] : sign.out.success,
  [c.SIGN_OUT_FAILURE] : sign.out.failure
});

