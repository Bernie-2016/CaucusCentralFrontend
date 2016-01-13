import { createReducer, reduceState }     from 'utils';
import * as c from 'constants/admin';

const initialState = {
  gettingUsers:false,
  addingUser:false,
  removingUser:false,
  error:false,
  users:[]
};

const getUsersRequest = (state) => {
  return reduceState(state, {error: false, gettingUsers:true});
};

const getUsersError = (state, error) => {
  return reduceState(state, {error:error, gettingUsers: false});
};

const getUsersSuccess = (state, response) => {
  return reduceState(state, {error:false, gettingUsers: false, users: response.users});
};

const addUserRequest = (state, user_info) => {
  return reduceState(state, {error: false, addingUser:true});
};

const addUserError = (state, error) => {
  return reduceState(state, {error:error, addingUser: false});
};

const addUserSuccess = (state, response) => {
  return reduceState(state, {error: false, addingUser: false, users: [...state.users, response]});
};

const removeUserRequest = (state, user_id) => {
  return reduceState(state, {error: false, removingUser: true});
};

const removeUserError = (state, error) => {
  return reduceState(state, {error: error, removingUser: false});
};

const removeUserSuccess = (state, response) => {
  return reduceState(state, {error: error, removingUser: false, users: response});
};

export default createReducer(initialState, {
  [c.GET_USERS_REQUEST] : getUsersRequest,
  [c.GET_USERS_ERROR] : getUsersError,
  [c.GET_USERS_SUCCESS] : getUsersSuccess,
  [c.ADD_USER_REQUEST] : addUserRequest,
  [c.ADD_USER_ERROR] : addUserError,
  [c.ADD_USER_SUCCESS] : addUserSuccess,
  [c.REMOVE_USER_REQUEST] : removeUserRequest,
  [c.REMOVE_USER_ERROR] : removeUserError,
  [c.REMOVE_USER_SUCCESS] : removeUserSuccess
});

