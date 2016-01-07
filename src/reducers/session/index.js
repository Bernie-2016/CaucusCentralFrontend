import { createReducer } from '../../utils';

const sign = {
  in: {
    request: function () {

    },
    success: function () {

    },
    failure: function () {

    }
  },
  out: {
    request: function () {

    },
    success: function () {

    },
    failure: function () {

    }
  }
};

const initialState = {
  authToken: undefined,
  isAdmin: false
};

export default createReducer(initialState, {
  [c.SIGN_IN_REQUEST] : sign.in.request,
  [c.SIGN_IN_SUCCESS] : sign.in.success,
  [c.SIGN_IN_FAILURE] : sign.in.failure,
  [c.SIGN_OUT_REQUEST] : sign.out.request,
  [c.SIGN_OUT_SUCCESS] : sign.out.success,
  [c.SIGN_OUT_FAILURE] : sign.out.failure
});

