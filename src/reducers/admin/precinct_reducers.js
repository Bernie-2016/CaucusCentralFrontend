import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  getting_precincts:false,
  error:false,
  precincts:[]
};

const precincts = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, getting_precincts:true});
    },
    successs: (state, response) => {
      return reduceState(state, {error: false, getting_precincts: false, precincts: response.precincts});
    },
    failure: (state, error) => {
      return reduceState(state, {error:error, getting_precincts: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCTS_REQUEST] : precincts.get.request,
  [c.GET_PRECINCTS_SUCCESS] : precincts.get.success,
  [c.GET_PRECINCTS_ERROR] : precincts.get.failure
});


