import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/signup';

export default {
  setAttr: (payload) => ({
    type: c.SET_ATTR,
    payload
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
  },
  reset: () => ({
    type: c.RESET
  })
};
