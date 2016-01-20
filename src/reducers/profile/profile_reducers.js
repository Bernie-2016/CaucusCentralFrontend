import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/profile';

const initialState = {
  fetched: false,
  updated: false,
  error: false,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirmation: ''
};

const profile = {
  get: {
    request: (state) => {
      return reduceState(state, { fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, { 
        fetched: true,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email,
        phoneNumber: response.user.phone_number
      });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error });
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  },
  update: {
    request: (state) => {
      return reduceState(state, { updated: false });
    },
    success: (state, response) => {
      notifySuccess('Profile updated!')
      return reduceState(state, { 
        updated: true,
        firstName: response.user.first_name,
        lastName: response.user.last_name,
        email: response.user.email,
        phoneNumber: response.user.phone_number
      });
    },
    failure: (state, error) => {
      notifyError('Profile update error.');
      return reduceState(state, { error: error });
    }
  },
  reset: (state) => {
    return reduceState(state, initialState);
  }
};

export default createReducer(initialState, {
  [c.GET_PROFILE_REQUEST]    : profile.get.request,
  [c.GET_PROFILE_SUCCESS]    : profile.get.success,
  [c.GET_PROFILE_FAILURE]    : profile.get.failure,
  [c.UPDATE_PROFILE_REQUEST] : profile.update.request,
  [c.UPDATE_PROFILE_SUCCESS] : profile.update.success,
  [c.UPDATE_PROFILE_FAILURE] : profile.update.failure,
  [c.SET_ATTR]               : profile.set,
  [c.RESET]                  : profile.reset
});

