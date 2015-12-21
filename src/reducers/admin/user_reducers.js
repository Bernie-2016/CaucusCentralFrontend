import { createReducer }     from 'utils';
import * as c from 'constants/admin';

const getUsersRequest = (state) => {
  return Object.assign({}, state, {error: false, getting_users:true});
};

const getUsersError = (state, error) => {
  return Object.assign({}, state, {error:error, getting_users: false});
};

const getUsersSuccess = (state, response) => {
  return Object.assign({}, state, {error:false, getting_users: false, users: response});
};

const addUserRequest = (state, user_info) => {
  return Object.assign({}, state, {error: false, adding_user:true});
};

const addUserError = (state, error) => {
  return Object.assign({}, state, {error:error, adding_user: false});
};

const addUserSuccess = (state, response) => {
  return Object.assign({}, state, {error: false, adding_user: false, users: response});
};

const removeUserRequest = (state, user_id) => {
  return Object.assign({}, state, {error: false, removing_user: true});
};

const removeUserError = (state, error) => {
  return Object.assign({}, state, {error: error, removing_user: false});
};

const removeUserSuccess = (state, response) => {
  return Object.assign({}, state, {error: error, removing_user: false, users: response});
};

const uploadCSVRequest = (state, csv) => {
  return Object.assign({}, state, {error: false, uploading_csv: true});
};

const uploadCSVError = (state, error) => {
  return Object.assign({}, state, {error: error, uploading_csv: false});
};

const uploadCSVSuccess = (state, response) => {
  return Object.assign({}, state, {error: false, uploading_csv: false, users: response});
};

const downloadCSVRequest = (state, csv) => {
  return Object.assign({}, state, {error: false, downloading_csv: true});
};

const downloadCSVError = (state, error) => {
  return Object.assign({}, state, {error: error, downloading_csv: false});
};

const downloadCSVSuccess = (state) => {
  return Object.assign({}, state, {error: false, downloading_csv: false});
};

const initialState = {
  getting_users:false,
  adding_user:false,
  removing_user:false,
  downloading_csv:false,
  uploading_csv:false,
  error:false,
  users:[]
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
  [c.REMOVE_USER_SUCCESS] : removeUserSuccess,
  [c.UPLOAD_CSV_REQUEST] : uploadCSVRequest,
  [c.UPLOAD_CSV_ERROR] : uploadCSVError,
  [c.UPLOAD_CSV_SUCCESS] : uploadCSVSuccess,
  [c.DOWNLOAD_CSV_REQUEST] : downloadCSVRequest,
  [c.DOWNLOAD_CSV_ERROR] : downloadCSVError,
  [c.DOWNLOAD_CSV_SUCCESS] : downloadCSVSuccess
});

