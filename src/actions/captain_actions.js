import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/captain';
import _ from 'lodash';

export default {
  getPrecinct: (payload) => {
    console.log('action fired with', payload);
    return {
      [CALL_API]: {
        types: [c.PRECINCT_REQUEST,
                c.PRECINCT_SUCCESS,
                c.PRECINCT_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.precinctId}`),
        headers: {
          'Authorization': payload.token
        },
        method: 'GET'
      }
    };
  },
  calculate: (payload) => {
    return {
      type: c.CACLULATE_TOTALS,
      payload: payload
    };
  },
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
      attendees: payload.attendees
    };
    return {
      [CALL_API]: {
        types: [{ type: c.TALLY_ATTENDEES_REQUEST, payload: payload },
                c.TALLY_ATTENDEES_SUCCESS,
                c.TALLY_ATTENDEES_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.precinctId}/viability`),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        },
        method: 'POST',
        body: body
      }
    };
  }
};
