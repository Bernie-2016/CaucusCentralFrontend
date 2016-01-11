import { createReducer, reduceState } from 'utils';
import * as c from 'constants/session';

const initialState = {
  id: undefined,
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
      console.log('got to reducer', payload);
      return reduceState(state, {
        fetching: true,
        email: payload.email
      });
    },
    success: function (state, response) {
      console.log('response', response);
      const newState = reduceState(state, {
        id: response.user.id,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        privilege: response.user.privilege,
        token: response.user.token,
        fetching: false
      });
      console.log('newState', newState);
      return newState;
    },
    failure: function (state, error) {
      console.log('failure!', state);
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

