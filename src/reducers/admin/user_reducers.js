import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  error: false,
  fetching: false,
  fetched: false,
  updating: false,
  updated: false,
  user: {}
};

const user = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, fetching: true, fetched: false, updated: false});
    },
    success: (state, response) => {
      return reduceState(state, { 
        fetching: false,
        fetched: true,
        user: {
          firstName: response.user.first_name,
          lastName: response.user.last_name,
          email: response.user.email,
          precinctId: response.user.precinct_id
        }
      });
    },
    error: (state, error) => {
      return reduceState(state, {error: error, fetching: false});
    }
  },
  update: {
    request: (state) => {
      return reduceState(state, { updated: false, updating: true });
    },
    success: (state, response) => {
      notifySuccess('User updated!')
      return reduceState(state, { user: response.user, updated: true, updating: false });
    },
    failure: (state, error) => {
      notifyError('User update error.');
      return reduceState(state, { error: error, updating: false });
    }
  }
};

export default createReducer(initialState, {
  [c.GET_USER_REQUEST]    : user.get.request,
  [c.GET_USER_SUCCESS]    : user.get.success,
  [c.GET_USER_ERROR]      : user.get.error,
  [c.UPDATE_USER_REQUEST] : user.update.request,
  [c.UPDATE_USER_SUCCESS] : user.update.success,
  [c.UPDATE_USER_ERROR]   : user.update.error
});
