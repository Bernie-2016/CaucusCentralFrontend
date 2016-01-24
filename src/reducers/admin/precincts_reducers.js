import { createReducer, reduceState } from 'utils';
import * as c from 'constants/admin';

const initialState = {
  fetched: false,
  error: false,
  dataSource: 'best',
  precincts: []
};

const precincts = {
  get: {
    request: (state) => {
      return reduceState(state, { error: false, fetched: false });
    },
    success: (state, response) => {
      return reduceState(state, { error: false, fetched: true, precincts: response.precincts});
    },
    failure: (state, error) => {
      return reduceState(state, { error:error, fetched: false });
    }
  },
  set: (state, payload) => {
    let newState = {};
    newState[payload.key] = payload.value;
    return reduceState(state, newState);
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCTS_REQUEST] : precincts.get.request,
  [c.GET_PRECINCTS_SUCCESS] : precincts.get.success,
  [c.GET_PRECINCTS_ERROR]   : precincts.get.failure,
  [c.SET_PRECINCTS_ATTR]    : precincts.set
});
