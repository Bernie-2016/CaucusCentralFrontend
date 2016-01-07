import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/session';

export default {
  signIn: (payload) => ({
    [CALL_API]: {
      types: [c.SIGN_IN_REQUEST,
              c.SIGN_IN_SUCCESS,
              c.SIGN_IN_FAILURE],
      endpoint: formatEndpoint(`/sessions`),
      body: {
        email: payload.email,
        password: payload.password
      },
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }
  }),
  signOut: (payload) => ({
    [CALL_API]: {
      types:  [c.SIGN_OUT_REQUEST,
              c.SIGN_OUT_SUCCESS,
              c.SIGN_OUT_FAILURE],
      endpoint: formatEndpoint(`/sessions`),
      headers: {
        'Content-Type': 'application/json',
        'token': payload.token
      },
      method: 'DELETE'
    }
  })
};
