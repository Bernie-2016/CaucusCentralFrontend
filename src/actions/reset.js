import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/reset';

export default {
  setAttr: (payload) => ({
    type: c.SET_FORM_ATTR,
    payload
  }),
  forgot: (payload) => {
    const body = JSON.stringify({
      email: payload.email
    });
    return {
      [CALL_API]: {
        types: [{ type: c.FORGOT_REQUEST, payload: payload },
                c.FORGOT_SUCCESS,
                c.FORGOT_FAILURE],
        endpoint: formatEndpoint(`/sessions/reset_password`),
        body,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    };
  },
  reset: (payload) => {
    const body = JSON.stringify({
      user: {
        password: payload.password,
        password_confirmation: payload.password_confirmation
      }
    });
    return {
      [CALL_API]: {
        types: [{ type: c.RESET_REQUEST, payload: payload },
                c.RESET_SUCCESS,
                c.RESET_FAILURE],
        endpoint: formatEndpoint(`/users/reset_password`),
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
