import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  gettingPrecincts: false,
  gettingPrecinct: false,
  error: false,
  precincts: [],
  precinct: {}
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

const precinct = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, gettingPrecinct: true});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, gettingPrecinct: false, precinct: response.precinct});
    },
    failure: (state, error) => {
      return reduceState(state, {error:error, gettingPrecinct: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCTS_REQUEST] : precincts.get.request,
  [c.GET_PRECINCTS_SUCCESS] : precincts.get.success,
  [c.GET_PRECINCTS_ERROR] : precincts.get.failure,
  [c.GET_PRECINCT_REQUEST] : precinct.get.request,
  [c.GET_PRECINCT_SUCCESS] : precinct.get.success,
  [c.GET_PRECINCT_ERROR] : precinct.get.failure
});
