import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  error: false,
  fetched: false,
  created: false,
  updated: false,
  removed: false,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirmation: '',
  newEmail: '',
  precinctId: '',
  precinctName: '',
  privilege: 'captain'
};

const user = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, { 
        fetched: true,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email,
        phoneNumber: response.user.phone_number,
        precinctId: response.user.precinct_id,
        precinctState: response.user.precinct_state,
        precinctName: response.user.precinct_name
      });
    },
    error: (state, error) => {
      return reduceState(state, {error: error});
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  update: {
    request: (state) => {
      return reduceState(state, { error: false, updated: false });
    },
    success: (state, response) => {
      notifySuccess('User updated!')
      return reduceState(state, { 
        updated: true, 
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email,
        precinctId: response.user.precinct_id
      });
    },
    failure: (state, error) => {
      notifyError('User update error.');
      return reduceState(state, { error: error });
    }
  },
  remove: {
    request: (state) => {
      return reduceState(state, { error: false, removed: false });
    },
    success: (state, response) => {
      notifySuccess('User removed!')
      return reduceState(state, { removed: true });
    },
    failure: (state, error) => {
      notifyError('User removal error.');
      return reduceState(state, { error: error });
    }
  },
  reset: (state) => {
    return reduceState(state, initialState);
  }
};

export default createReducer(initialState, {
  [c.GET_USER_REQUEST]    : user.get.request,
  [c.GET_USER_SUCCESS]    : user.get.success,
  [c.GET_USER_FAILURE]    : user.get.error,
  [c.UPDATE_USER_REQUEST] : user.update.request,
  [c.UPDATE_USER_SUCCESS] : user.update.success,
  [c.UPDATE_USER_FAILURE] : user.update.error,
  [c.REMOVE_USER_REQUEST] : user.remove.request,
  [c.REMOVE_USER_SUCCESS] : user.remove.success,
  [c.REMOVE_USER_FAILURE] : user.remove.error,
  [c.SET_USER_ATTR]       : user.set,
  [c.RESET_USER]          : user.reset
});
