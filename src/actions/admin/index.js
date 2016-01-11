import * as c from 'constants/admin';
import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';

export default {
  getAllPrecincts: (payload) => ({
    [CALL_API]: {
      types: [c.GET_PRECINCTS_REQUEST,
              c.GET_PRECINCTS_SUCCESS,
              c.GET_PRECINCTS_FAILURE],
      endpoint: formatEndpoint(`/precincts`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  getAllUsers: (payload) => ({
    [CALL_API]: {
      types: [c.GET_USERS_REQUEST,
              c.GET_USERS_SUCCESS,
              c.GET_USERS_FAILURE],
      endpoint: formatEndpoint(`/users`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  getUser: (payload) => ({
    [CALL_API]: {
      types: [c.GET_USER_REQUEST,
              c.GET_USER_SUCCESS,
              c.GET_USER_FAILURE],
      endpoint: formatEndpoint(`/users/${payload.id}`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  createUser: (payload) => ({
    [CALL_API]: {
      types: [c.CREATE_USER_REQUEST,
              c.CREATE_USER_SUCCESS,
              c.CREATE_USER_FAILURE],
      endpoint: formatEndpoint(`/users`),
      method: 'POST',
      body: {},
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  updateUser: (payload) => ({
    [CALL_API]: {
      types: [c.UPDATE_USER_REQUEST,
              c.UPDATE_USER_SUCCESS,
              c.UPDATE_USER_FAILURE],
      endpoint: formatEndpoint(`/users/${payload.id}`),
      method: 'PATCH',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  remove: (payload) => ({
    [CALL_API]: {
      types: [c.REMOVE_USER_REQUEST,
              c.REMOVE_USER_SUCCESS,
              c.REMOVE_USER_FAILURE],
      endpoint: formatEndpoint(`/users/${payload.id}`),
      method: 'DELETE',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  downloadCsv: () => ({
    // todo: implement
  }),
  uploadCsv: () => ({
    // todo: implement
  })
};
