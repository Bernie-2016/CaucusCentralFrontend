import { createReducer } from '../utils';
import {
  INCREMENT_PERSON_COUNTER,
  DECREMENT_PERSON_COUNTER
} from 'constants/captain_constants';

const initialState = 0;

export default createReducer(initialState, {
  [INCREMENT_PERSON_COUNTER] : (state) => state + 1,
  [DECREMENT_PERSON_COUNTER] : (state) => {
    if (state == 0) {
      return state;
    } else {
      return state - 1;
    }
  }
});
