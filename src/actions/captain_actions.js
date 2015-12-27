export default {
  increment_person_counter: () => ({
    type: 'INCREMENT_PERSON_COUNTER'
  }),
  decrement_person_counter: () => ({
    type: 'DECREMENT_PERSON_COUNTER'
  }),
  tally_attendees: (payload) => ({
    type: 'TALLY_ATTENDEES',
    payload: payload
  })
};
