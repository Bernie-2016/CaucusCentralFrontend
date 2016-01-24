import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  fetched: false,
  error: false,
  state: { 
    precincts: []
  }
};

const state = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, { error: false, fetched: true, state: response.state });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error, fetched: false });
    }
  }
};

export default createReducer(initialState, {
  [c.GET_STATE_REQUEST] : state.get.request,
  [c.GET_STATE_SUCCESS] : state.get.success,
  [c.GET_STATE_FAILURE] : state.get.failure
});
