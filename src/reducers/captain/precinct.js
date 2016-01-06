import { createReducer } from '../../utils';
import * as c from 'constants/captain';

const initialState = {
  precinctId: 135, // todo: set to user's precinct
  precinctName: '',
  totalDelegates: 0
};

export default createReducer(initialState, {
  [c.TALLY_ATTENDEES_REQUEST] : tallyAttendeesRequest,
  [c.TALLY_ATTENDEES_SUCCESS] : tallyAttendeesSuccess,
  [c.TALLY_ATTENDEES_FAILURE] : tallyAttendeesFailure
});
