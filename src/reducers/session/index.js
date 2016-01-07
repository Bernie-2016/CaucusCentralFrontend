import { createReducer } from '../../utils';
import * as c from 'constants/session';

const initialState = {
  firstName: '',
  lastName: '',
  email: undefined,
  privilege: undefined,
  token: undefined,
  fetching: false,
  destroying: false
};

const sign = {
  in: {
    request: function (state, payload) {
      return Object.assign({}, state, {
        fetching: true,
        email: payload.email
      });
    },
    success: function (state, response) {
      return Object.assign({}, state, {
        fetching: false,
        firstName: response.first_name,
        lastName: response.last_name,
        privilege: response.privilege,
        token: response.token
      });
    },
    failure: function (state, error) {
      return Object.assign({}, state, { error: error, fetching: false });
    }
  },
  out: {
    request: function (state) {
      return Object.assign({}, state, { destroying: true });
    },
    success: function (state) {
      return Object.assign({}, state, initialState);
    },
    failure: function (state, error) {
      return Object.assign({}, state, { error: error, destroying: false });
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

