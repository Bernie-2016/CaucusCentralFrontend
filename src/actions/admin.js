import * as c from 'constants/admin';
import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';

export default {
  getAllStates: (payload) => ({
    [CALL_API]: {
      types: [c.GET_STATES_REQUEST,
              c.GET_STATES_SUCCESS,
              c.GET_STATES_FAILURE],
      endpoint: formatEndpoint(`/states`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
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
  setPrecinctsAttr: (payload) => ({
    type: c.SET_PRECINCTS_ATTR,
    payload
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
  setUsersAttr: (payload) => ({
    type: c.SET_USERS_ATTR,
    payload
  }),
  getState: (payload) => ({
    [CALL_API]: {
      types: [c.GET_STATE_REQUEST,
              c.GET_STATE_SUCCESS,
              c.GET_STATE_FAILURE],
      endpoint: formatEndpoint(`/states/${payload.code}`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  getPrecinct: (payload) => ({
    [CALL_API]: {
      types: [c.GET_PRECINCT_REQUEST,
              c.GET_PRECINCT_SUCCESS,
              c.GET_PRECINCT_FAILURE],
      endpoint: formatEndpoint(`/precincts/${payload.id}`),
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
  createInvitation: (payload) => {
    const body = JSON.stringify({
      invitation: payload.invitation
    });
    return {
      [CALL_API]: {
        types: [c.CREATE_USER_REQUEST,
                c.CREATE_USER_SUCCESS,
                c.CREATE_USER_FAILURE],
        endpoint: formatEndpoint(`/invitations`),
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    };
  },
  setUserAttr: (payload) => ({
    type: c.SET_USER_ATTR,
    payload
  }),
  updateUser: (payload) => {
    const body = JSON.stringify({
      user: payload.user
    });
    return {
      [CALL_API]: {
        types: [c.UPDATE_USER_REQUEST,
                c.UPDATE_USER_SUCCESS,
                c.UPDATE_USER_FAILURE],
        endpoint: formatEndpoint(`/users/${payload.id}`),
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    };
  },
  setPrecinctAttr: (payload) => ({
    type: c.SET_PRECINCT_ATTR,
    payload
  }),
  updatePrecinct: (payload) => {
    const body = JSON.stringify({
      precinct: payload.precinct
    });
    return {
      [CALL_API]: {
        types: [c.UPDATE_PRECINCT_REQUEST,
                c.UPDATE_PRECINCT_SUCCESS,
                c.UPDATE_PRECINCT_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.id}`),
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    };
  },
  removeUser: (payload) => ({
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
  setImportUsers: (payload) => {
    return {
      type: c.SET_IMPORT_USERS,
      payload
    };
  },
  importUsers: (payload) => {
    const body = JSON.stringify({
      users: payload.users
    });
    return {
      [CALL_API]: {
        types: [c.IMPORT_USERS_REQUEST,
                c.IMPORT_USERS_SUCCESS,
                c.IMPORT_USERS_FAILURE],
        endpoint: formatEndpoint(`/users/import`),
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    };
  }
};
