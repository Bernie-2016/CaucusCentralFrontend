import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  gettingUsers:false,
  gettingUser:false,
  addingUser:false,
  removingUser:false,
  importingUsers: false,
  imported: false,
  error:false,
  fetchedUser:false,
  updatedUser:false,
  updatingUser:false,
  users:[],
  importedCount: 0,
  failedUsers: [],
  user:{}
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

const user = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, gettingUser: true, fetchedUser: false, updatedUser: false});
    },
    success: (state, response) => {
      return reduceState(state, { 
        gettingUser: false,
        fetchedUser: true,
        user: {
          firstName: response.user.first_name,
          lastName: response.user.last_name,
          email: response.user.email,
          precinctId: response.user.precinct_id
        }
      });
    },
    error: (state, error) => {
      return reduceState(state, {error: error, gettingUser: false});
    }
  },
  update: {
    request: (state) => {
      return reduceState(state, { updatedUser: false, updatingUser: true });
    },
    success: (state, response) => {
      notifySuccess('User updated!')
      return reduceState(state, { user: response.user, updatedUser: true, updatingUser: false });
    },
    failure: (state, error) => {
      notifyError('User update error.');
      return reduceState(state, { error: error, updatingUser: false });
    }
  }
};

export default createReducer(initialState, {
  [c.GET_USERS_REQUEST] : users.get.request,
  [c.GET_USERS_SUCCESS] : users.get.success,
  [c.GET_USERS_ERROR] : users.get.error,
  [c.CREATE_USER_REQUEST] : users.add.request,
  [c.CREATE_USER_SUCCESS] : users.add.success,
  [c.CREATE_USER_ERROR] : users.add.error,
  [c.REMOVE_USER_REQUEST] : users.remove.request,
  [c.REMOVE_USER_SUCCESS] : users.remove.success,
  [c.REMOVE_USER_ERROR] : users.remove.error,
  [c.IMPORT_USERS_REQUEST] : users.import.request,
  [c.IMPORT_USERS_SUCCESS] : users.import.success,
  [c.IMPORT_USERS_ERROR] : users.import.error,
  [c.GET_USER_REQUEST] : user.get.request,
  [c.GET_USER_SUCCESS] : user.get.success,
  [c.GET_USER_ERROR] : user.get.error,
  [c.UPDATE_USER_REQUEST] : user.update.request,
  [c.UPDATE_USER_SUCCESS] : user.update.success,
  [c.UPDATE_USER_ERROR] : user.update.error
});

