import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';

export default {
  increment_person_counter: () => ({
    type: 'INCREMENT_PERSON_COUNTER'
  }),
  decrement_person_counter: () => ({
    type: 'DECREMENT_PERSON_COUNTER'
  }),
  tally_attendees: (payload) => ({
    [CALL_API]: {
      types: ['REQUEST_TALLY_ATTENDEES',
              'SUCCESS_TALLY_ATTENDEES',
              'FAIL_TALLY_ATTENDEES'],
      endpoint: formatEndpoint(`/precincts/${payload.precinct_id}`),
      method: 'PATCH',
      body: () => {
        let body = {
          authentication: `BASIC ${window.__AUTH_TOKEN__}`,
          attendees: payload.attendees
        };
        payload.candidates.forEach((candidate) => {
          body[candidate] = payload.candidates[candidate].count;
        });
        return body;
      }
    }
  })
};
