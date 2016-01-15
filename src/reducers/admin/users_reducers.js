import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  gettingUsers: false,
  addingUser: false,
  removingUser: false,
  importingUsers: false,
  imported: false,
  error: false,
  importedCount: 0,
  failedUsers: [],
  users: []
};

const users = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, gettingUsers: true});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, gettingUsers: false, users: response.users});
    },
    error: (state, error) => {
      return reduceState(state, {error: error, gettingUsers: false});
    }
  },
  add: {
    request: (state) => {
      return reduceState(state, {error: false});
    },
    success: (state, response) => {
      console.log(response);
      notifySuccess('User invited!')
      return reduceState(state, {error: false, addingUser: false, users: [...state.users, response]});
    },
    error: (state, error) => {
      notifyError('User invite error.')
      return reduceState(state, {error: error, addingUser: false});
    }
  },
  remove: {
    request: (state) => {
      return reduceState(state, {error: false, removingUser: true});
    },
    success: (state, response) => {
      notifySuccess('User removed!');
      return reduceState(state, {error: error, removingUser: false, users: response});
    },
    error: (state, error) => {
      notifyError('User removal error.')
      return reduceState(state, {error: error, removingUser: false});
    }
  },
  import: {
    request: (state) => {
      return reduceState(state, {error: false, importingUsers: true, imported: false});
    },
    success: (state, response) => {
      notifySuccess('Users imported!');
      return reduceState(state, {error: false, importingUsers: false, imported: true, importedCount: response.importedCount, failedUsers: response.failedUsers});
    },
    error: (state, error) => {
      notifyError('User import error.')
      return reduceState(state, {error: error, importingUsers: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_USERS_REQUEST]    : users.get.request,
  [c.GET_USERS_SUCCESS]    : users.get.success,
  [c.GET_USERS_ERROR]      : users.get.error,
  [c.CREATE_USER_REQUEST]  : users.add.request,
  [c.CREATE_USER_SUCCESS]  : users.add.success,
  [c.CREATE_USER_ERROR]    : users.add.error,
  [c.REMOVE_USER_REQUEST]  : users.remove.request,
  [c.REMOVE_USER_SUCCESS]  : users.remove.success,
  [c.REMOVE_USER_ERROR]    : users.remove.error,
  [c.IMPORT_USERS_REQUEST] : users.import.request,
  [c.IMPORT_USERS_SUCCESS] : users.import.success,
  [c.IMPORT_USERS_ERROR]   : users.import.error
});
