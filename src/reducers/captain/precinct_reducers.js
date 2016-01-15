import { createReducer, reduceState } from 'utils';
import { notifySuccess, notifyError } from 'utils/notifications';
import * as c from 'constants/captain';

const initialState = {
  gettingPrecinct:false,
  updatingPrecinct:false,
  fetched:false,
  error:false,
  precinct:{}
};

const precinct = {
  get: {
    request: (precinct) => {
      return reduceState(precinct, {error: false, gettingPrecinct:true, fetched: false});
    },
    success: (precinct, response) => {
      return reduceState(precinct, {error: false, gettingPrecinct: false, fetched: true, precinct: response.precinct});
    },
    failure: (precinct, error) => {
      return reduceState(precinct, {error:error, gettingPrecinct: false});
    }
  },
  update: {
    request: (precinct) => {
      return reduceState(precinct, {error: false, updatingPrecinct:true});
    },
    success: (precinct, response) => {
      notifySuccess('Precinct updated!')
      return reduceState(precinct, {error: false, updatingPrecinct: false, precinct: response.precinct});
    },
    failure: (precinct, error) => {
      notifyError('Precinct update error.')
      return reduceState(precinct, {error:error, updatingPrecinct: false});
    }
  }
};

export default createReducer(initialState, {
  [c.GET_PRECINCT_REQUEST] : precinct.get.request,
  [c.GET_PRECINCT_SUCCESS] : precinct.get.success,
  [c.GET_PRECINCT_FAILURE]  : precinct.get.failure,
  [c.UPDATE_ATTENDEES_REQUEST] : precinct.update.request,
  [c.UPDATE_ATTENDEES_SUCCESS] : precinct.update.success,
  [c.UPDATE_ATTENDEES_FAILURE]  : precinct.update.failure,
  [c.UPDATE_VIABILITY_COUNTS_REQUEST] : precinct.update.request,
  [c.UPDATE_VIABILITY_COUNTS_SUCCESS] : precinct.update.success,
  [c.UPDATE_VIABILITY_COUNTS_FAILURE]  : precinct.update.failure,
  [c.UPDATE_APPORTIONMENT_COUNTS_REQUEST] : precinct.update.request,
  [c.UPDATE_APPORTIONMENT_COUNTS_SUCCESS] : precinct.update.success,
  [c.UPDATE_APPORTIONMENT_COUNTS_FAILURE]  : precinct.update.failure
});

