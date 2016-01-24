import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/report';

export default {
  setAttr: (payload) => ({
    type: c.SET_ATTR,
    payload
  }),
  get: (payload) => ({
    [CALL_API]: {
      types: [c.GET_REPORT_REQUEST,
              c.GET_REPORT_SUCCESS,
              c.GET_REPORT_FAILURE],
      endpoint: formatEndpoint(`/precincts/${payload.precinctId}/reports/${payload.id}`),
      method: 'GET',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  create: (payload) => {
    const body = JSON.stringify({
      report: {
        total_attendees: payload.attendees,
        phase: payload.phase,
        delegate_counts: payload.delegateCounts
      }
    });
    return {
      [CALL_API]: {
        types: [c.CREATE_REPORT_REQUEST,
                c.CREATE_REPORT_SUCCESS,
                c.CREATE_REPORT_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.precinctId}/reports`),
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        },
        method: 'POST'
      }
    };
  },
  update: (payload) => {
    const body = JSON.stringify({
      report: {
        total_attendees: payload.attendees,
        phase: payload.phase,
        delegate_counts: payload.delegateCounts
      }
    });
    return {
      [CALL_API]: {
        types: [c.UPDATE_REPORT_REQUEST,
                c.UPDATE_REPORT_SUCCESS,
                c.UPDATE_REPORT_FAILURE],
        endpoint: formatEndpoint(`/precincts/${payload.precinctId}/reports/${payload.id}`),
        body,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': payload.token
        },
        method: 'PATCH'
      }
    };
  },
  remove: (payload) => ({
    [CALL_API]: {
      types: [c.REMOVE_REPORT_REQUEST,
              c.REMOVE_REPORT_SUCCESS,
              c.REMOVE_REPORT_FAILURE],
      endpoint: formatEndpoint(`/precincts/${payload.precinctId}/reports/${payload.id}`),
      method: 'DELETE',
      headers: {
        'Authorization': payload.token
      }
    }
  }),
  reset: () => ({
    type: c.RESET
  })
};
