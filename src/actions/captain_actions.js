import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/captain';
import _ from 'lodash';

export default {
  getCurrentTotals: (payload) => ({
    [CALL_API]: {
      types: [c.CANDIDATE_TOTALS_REQUEST,
              c.CANDIDATE_TOTALS_SUCCESS,
              c.CANDIDATE_TOTALS_FAILURE],
      endpoint: formatEndpoint(`/precincts/${payload.precinctId}`),
      method: 'GET'
    }
  }),
  tallyAttendees: (payload) => {
    const body = {
      precinct: {
        id: payload.precinctId,
        total_attendees: payload.attendees,
        delegate_counts: _.reduce(payload.candidates, (result, supporters, candidate) => {
          return result.concat([{
            key: candidate,
            supporters: supporters
          }]);}, [])
      },
      authentication: `BASIC ${window.__AUTH_TOKEN__}`,
      attendees: payload.attendees
    };
    console.log('BODY', body);
    return {
      [CALL_API]: {
        types: [{ type: c.TALLY_ATTENDEES_REQUEST, payload: payload },
                c.TALLY_ATTENDEES_SUCCESS,
                c.TALLY_ATTENDEES_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.precinctId}/viability`),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: body
      }
    };
  }
};
