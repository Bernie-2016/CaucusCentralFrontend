import { createReducer }     from 'utils';
import * as c from 'constants/admin';
import admin_actions from 'actions/admin';


const getPrecinctsRequest = (state) => {
  return Object.assign({}, state, {error: false, getting_precincts:true});
};

const getPrecinctsError = (state, error) => {
  return Object.assign({}, state, {error:error, getting_precincts: false});
};

const getPrecinctsSuccess = (state, response) => {
  return Object.assign({}, state, {error: false, getting_precincts: false, precincts: response.precincts});
};

const initialState = {
  getting_precincts:false,
  error:false,
  precincts:[]
};
export default createReducer(initialState, {
  [c.GET_PRECINCTS_REQUEST] : getPrecinctsRequest,
  [c.GET_PRECINCTS_ERROR] : getPrecinctsError,
  [c.GET_PRECINCTS_SUCCESS] : getPrecinctsSuccess
});


