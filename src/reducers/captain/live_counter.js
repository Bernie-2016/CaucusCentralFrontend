import { createReducer } from '../../utils';

const initialState = 0;

export default function liveCounter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_PERSON_COUNTER':
      return state + 1;
    case 'DECREMENT_PERSON_COUNTER':
      return (state > 0 ? state - 1 : state);
    default:
      return state;
  }
}
