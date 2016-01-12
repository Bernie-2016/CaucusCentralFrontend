import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  gettingPrecincts:false,
  error:false,
  precincts:[]
};

const precincts = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, gettingPrecincts:true});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, gettingPrecincts: false, precincts: response.precincts});
    },
    failure: (state, error) => {
      return reduceState(state, {error:error, gettingPrecincts: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCTS_REQUEST] : precincts.get.request,
  [c.GET_PRECINCTS_SUCCESS] : precincts.get.success,
  [c.GET_PRECINCTS_ERROR] : precincts.get.failure
});
