import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  error: false,
  fetching: false,
  fetched: false,
  creating: false,
  created: false,
  updating: false,
  updated: false,
  removed: false,
  removing: false,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  precinctId: '',
  privilege: 'captain'
};

const user = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, fetching: true, fetched: false, updated: false, removed: false});
    },
    success: (state, response) => {
      return reduceState(state, { 
        fetching: false,
        fetched: true,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email,
        precinctId: response.user.precinct_id
      });
    },
    error: (state, error) => {
      return reduceState(state, {error: error, fetching: false});
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  add: {
    request: (state) => {
      return reduceState(state, { error: false, creating: true, created: false });
    },
    success: (state, response) => {
      notifySuccess('User invited!')
      return reduceState(state, { error: false, creating: false, created: true });
    },
    error: (state, error) => {
      notifyError('User invite error.')
      return reduceState(state, { error: error, creating: false });
    }
  },
  update: {
    request: (state) => {
      return reduceState(state, { updated: false, updating: true });
    },
    success: (state, response) => {
      notifySuccess('User updated!')
      return reduceState(state, { 
        updated: true, 
        updating: false,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email,
        precinctId: response.user.precinct_id
      });
    },
    failure: (state, error) => {
      notifyError('User update error.');
      return reduceState(state, { error: error, updating: false });
    }
  },
  remove: {
    request: (state) => {
      return reduceState(state, { removed: false, removing: true });
    },
    success: (state, response) => {
      notifySuccess('User removed!')
      return reduceState(state, { removed: true, removing: false });
    },
    failure: (state, error) => {
      notifyError('User removal error.');
      return reduceState(state, { error: error, removing: false });
    }
  }
};

export default createReducer(initialState, {
  [c.GET_USER_REQUEST]    : user.get.request,
  [c.GET_USER_SUCCESS]    : user.get.success,
  [c.GET_USER_ERROR]      : user.get.error,
  [c.CREATE_USER_REQUEST] : user.add.request,
  [c.CREATE_USER_SUCCESS] : user.add.success,
  [c.CREATE_USER_ERROR]   : user.add.error,
  [c.UPDATE_USER_REQUEST] : user.update.request,
  [c.UPDATE_USER_SUCCESS] : user.update.success,
  [c.UPDATE_USER_ERROR]   : user.update.error,
  [c.REMOVE_USER_REQUEST] : user.remove.request,
  [c.REMOVE_USER_SUCCESS] : user.remove.success,
  [c.REMOVE_USER_ERROR]   : user.remove.error,
  [c.SET_USER_ATTR]       : user.set
});
