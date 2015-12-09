import {
  INCREMENT_PERSON_COUNTER,
  DECREMENT_PERSON_COUNTER
} from 'constants/captain_constants.js';

export default {
  increment_person_counter: () => ({
    type: INCREMENT_PERSON_COUNTER
  }),
  decrement_person_counter: () => ({
    type: DECREMENT_PERSON_COUNTER
  })
};
