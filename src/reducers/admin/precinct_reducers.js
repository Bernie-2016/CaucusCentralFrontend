import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/admin';

const initialState = {
  gettingPrecincts: false,
  gettingPrecinct: false,
  fetchedPrecinct: false,
  updatingPrecinct: false,
  updatedPrecinct: false,
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
      return reduceState(state, {error: false, updatedPrecinct: false, fetchedPrecinct: false, gettingPrecinct: true});
    },
    success: (state, response) => {
      return reduceState(state, {error: false, fetchedPrecinct: true, gettingPrecinct: false, precinct: response.precinct});
    },
    failure: (state, error) => {
      return reduceState(state, {error:error, gettingPrecinct: false});
    }
  },
  update: {
    request: (state) => {
      return reduceState(state, {error: false, updatedPrecinct: false, updatingPrecinct: true});
    },
    success: (state, response) => {
      notifySuccess('Precinct updated!');
      return reduceState(state, {error: false, updatedPrecinct: true, updatingPrecinct: false, precinct: response.precinct});
    },
    failure: (state, error) => {
      notifyError('Precinct update error.');
      return reduceState(state, {error:error, updatingPrecinct: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCTS_REQUEST] : precincts.get.request,
  [c.GET_PRECINCTS_SUCCESS] : precincts.get.success,
  [c.GET_PRECINCTS_ERROR] : precincts.get.failure,
  [c.GET_PRECINCT_REQUEST] : precinct.get.request,
  [c.GET_PRECINCT_SUCCESS] : precinct.get.success,
  [c.GET_PRECINCT_ERROR] : precinct.get.failure,
  [c.UPDATE_PRECINCT_REQUEST] : precinct.update.request,
  [c.UPDATE_PRECINCT_SUCCESS] : precinct.update.success,
  [c.UPDATE_PRECINCT_ERROR] : precinct.update.failure
});
