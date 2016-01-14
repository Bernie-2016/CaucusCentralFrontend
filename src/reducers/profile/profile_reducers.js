import { createReducer, reduceState } from 'utils';
import * as c from 'constants/profile';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  fetching: false,
  fetched: false,
  updating: false,
  updated: false
};

const profile = {
  get: {
    request: (state) => {
      return reduceState(state, { fetching: true });
    },
    success: (state, response) => {
      return reduceState(state, { 
        fetching: false,
        fetched: true,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email
      });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error, fetching: false });
    }
  },
  update: {
    request: (state) => {
      return reduceState(state, { updating: true });
    },
    success: (state, response) => {
      return reduceState(state, { profile: response.user, updated: true, updating: false });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error, updating: false });
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PROFILE_REQUEST] : profile.get.request,
  [c.GET_PROFILE_SUCCESS] : profile.get.success,
  [c.GET_PROFILE_FAILURE] : profile.get.failure,
  [c.UPDATE_PROFILE_REQUEST] : profile.update.request,
  [c.UPDATE_PROFILE_SUCCESS] : profile.update.success,
  [c.UPDATE_PROFILE_FAILURE] : profile.update.failure
});

