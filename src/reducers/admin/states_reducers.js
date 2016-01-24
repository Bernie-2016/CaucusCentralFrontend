import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  fetched: false,
  error: false,
  states: []
};

const states = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, { error: false, fetched: true, states: response.states });
    },
    failure: (state, error) => {
      return reduceState(state, { error: error, fetched: true });
    }
  }
};

export default createReducer(initialState, {
  [c.GET_STATES_REQUEST] : states.get.request,
  [c.GET_STATES_SUCCESS] : states.get.success,
  [c.GET_STATES_FAILURE] : states.get.failure
});
