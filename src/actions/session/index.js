import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/session';

export default {
  signIn: (payload) => {
    const body = JSON.stringify({
      email: payload.email,
      password: payload.password
    });
    return {
      [CALL_API]: {
        types: [{ type: c.SIGN_IN_REQUEST, payload: payload },
                c.SIGN_IN_SUCCESS,
                c.SIGN_IN_FAILURE],
        endpoint: formatEndpoint(`/sessions`),
        body,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    };
  },
  signOut: (payload) => ({
    [CALL_API]: {
      types:  [c.SIGN_OUT_REQUEST,
              c.SIGN_OUT_SUCCESS,
              c.SIGN_OUT_FAILURE],
      endpoint: formatEndpoint(`/sessions`),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': payload.token
      },
      method: 'DELETE'
    }
  }),
  signUp: (payload) => {
    const body = JSON.stringify({
      user: {
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
        invitation_token: payload.token
      }
    });
    return {
      [CALL_API]: {
        types: [{ type: c.SIGN_UP_REQUEST, payload: payload },
                c.SIGN_UP_SUCCESS,
                c.SIGN_UP_FAILURE],
        endpoint: formatEndpoint(`/users`),
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        },
        method: 'POST'
      }
    };
  }
};
