import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/captain';
import _ from 'lodash';

export default {
  getPrecinct: (payload) => ({
    [CALL_API]: {
      types: [c.GET_PRECINCT_REQUEST,
              c.GET_PRECINCT_SUCCESS,
              c.GET_PRECINCT_FAILURE],
      endpoint: formatEndpoint(`/precincts/${payload.id}`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  updateAttendees: (payload) => {
    const body = JSON.stringify({
      precinct: {
        total_attendees: payload.total_attendees
      }
    });

    return {
      [CALL_API]: {
        types: [c.UPDATE_ATTENDEES_REQUEST,
                c.UPDATE_ATTENDEES_SUCCESS,
                c.UPDATE_ATTENDEES_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.id}/begin`),
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    }
  },
  updateViabilityCounts: (payload) => {
    const body = JSON.stringify({
      precinct: {
        delegate_counts: payload.delegate_counts
      }
    });

    return {
      [CALL_API]: {
        types: [c.UPDATE_VIABILITY_COUNTS_REQUEST,
                c.UPDATE_VIABILITY_COUNTS_SUCCESS,
                c.UPDATE_VIABILITY_COUNTS_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.id}/viability`),
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    }
  },
  updateApportionmentCounts: (payload) => {
    const body = JSON.stringify({
      precinct: {
        delegate_counts: payload.delegate_counts
      }
    });

    return {
      [CALL_API]: {
        types: [c.UPDATE_APPORTIONMENT_COUNTS_REQUEST,
                c.UPDATE_APPORTIONMENT_COUNTS_SUCCESS,
                c.UPDATE_APPORTIONMENT_COUNTS_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.id}/apportionment`),
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        }
      }
    }
  }
};
