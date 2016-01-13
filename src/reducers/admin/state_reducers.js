import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  gettingState:false,
  error:false,
  state:{precincts:[]}
};

const state = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, gettingState:true});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, gettingState: false, state: response.state});
    },
    failure: (state, error) => {
      return reduceState(state, {error:error, gettingState: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_STATE_REQUEST] : state.get.request,
  [c.GET_STATE_SUCCESS] : state.get.success,
  [c.GET_STATE_ERROR] : state.get.failure
});
