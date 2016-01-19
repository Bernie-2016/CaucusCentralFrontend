import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/reset';

export default {
  setAttr: (payload) => ({
    type: c.SET_ATTR,
    payload
  }),
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
