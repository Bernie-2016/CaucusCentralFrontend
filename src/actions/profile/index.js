import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/profile';

export default {
  getProfile: (payload) => ({
    [CALL_API]: {
      types: [c.GET_PROFILE_REQUEST,
              c.GET_PROFILE_SUCCESS,
              c.GET_PROFILE_FAILURE],
      endpoint: formatEndpoint(`/users/profile`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  updateProfile: (payload) => {
    const body = JSON.stringify({
      user: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.passwordConfirmation
      }
    });

    return {
      [CALL_API]: {
        types: [c.UPDATE_PROFILE_REQUEST,
                c.UPDATE_PROFILE_SUCCESS,
                c.UPDATE_PROFILE_FAILURE],
        endpoint: formatEndpoint(`/users/profile`),
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    }
  }
};
