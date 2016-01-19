import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  fetching: false,
  adding: false,
  removing: false,
  importing: false,
  imported: false,
  error: false,
  importedCount: 0,
  usersToImport: [],
  failedUsers: [],
  users: []
};

const users = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, fetching: true, imported: false});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, fetching: false, users: response.users});
    },
    error: (state, error) => {
      return reduceState(state, {error: error, fetching: false});
    }
  },
  import: {
    set: (state, payload) => {
      return reduceState(state, { usersToImport: payload.users });
    },
    request: (state) => {
      return reduceState(state, {error: false, usersToImport: [], importingUsers: true, imported: false});
    },
    success: (state, response) => {
      notifySuccess('Users imported!');
      return reduceState(state, {error: false, importingUsers: false, imported: true, importedCount: response.importedCount, failedUsers: response.failedUsers});
    },
    error: (state, error) => {
      notifyError('User import error.')
      return reduceState(state, {error: error, importingUsers: false});
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  }
};

export default createReducer(initialState, {
  [c.GET_USERS_REQUEST]    : users.get.request,
  [c.GET_USERS_SUCCESS]    : users.get.success,
  [c.GET_USERS_ERROR]      : users.get.error,
  [c.IMPORT_USERS_REQUEST] : users.import.request,
  [c.IMPORT_USERS_SUCCESS] : users.import.success,
  [c.IMPORT_USERS_ERROR]   : users.import.error,
  [c.SET_IMPORT_USERS]     : users.import.set,
  [c.SET_USERS_ATTR]       : users.set
});
