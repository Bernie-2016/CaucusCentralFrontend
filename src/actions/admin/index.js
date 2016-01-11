import * as c from 'constants/admin';
import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';

const precincts = {
  get: () => ({
    [CALL_API]: {
      types: [c.GET_PRECINCTS_REQUEST,
              c.GET_PRECINCTS_SUCCESS,
              c.GET_PRECINCTS_FAILURE],
      endpoint: formatEndpoint(`/precincts`),
      method: 'GET'
    }
  })
};

const users = {
  get: () => ({
    [CALL_API]: {
      types: [c.GET_USERS_REQUEST,
              c.GET_USERS_SUCCESS,
              c.GET_USERS_FAILURE],
      endpoint: formatEndpoint(`/users`),
      method: 'GET'
    }
  }),
  add: () => ({
    [CALL_API]: {
      types: [c.ADD_USER_REQUEST,
              c.ADD_USER_SUCCESS,
              c.ADD_USER_FAILURE],
      endpoint: formatEndpoint(`/users`),
      method: 'POST'
    }
  }),
  remove: () => ({
    [CALL_API]: {
      types: [c.REMOVE_USER_REQUEST,
              c.REMOVE_USER_SUCCESS,
              c.REMOVE_USER_FAILURE],
      endpoint: formatEndpoint(`/users`),
      method: 'delete'
    }
  })
};

const csv = {
  download: () => ({
    // todo: implement
  }),
  upload: () => ({
    // todo: implement
  })
};

export default {
  precincts,
  users,
  csv
};
