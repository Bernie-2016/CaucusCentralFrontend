import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  gettingStates:false,
  error:false,
  states:[]
};

const states = {
  get: {
    request: (state) => {
      return reduceState(state, {error: false, gettingStates:true});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, gettingStates: false, states: response.states});
    },
    failure: (state, error) => {
      return reduceState(state, {error:error, gettingStates: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_STATES_REQUEST] : states.get.request,
  [c.GET_STATES_SUCCESS] : states.get.success,
  [c.GET_STATES_ERROR] : states.get.failure
});
