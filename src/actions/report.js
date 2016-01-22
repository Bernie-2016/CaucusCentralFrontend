import { CALL_API } from 'redux-api-middleware';
import { formatEndpoint } from 'utils/api';
import * as c from 'constants/report';

export default {
  setAttr: (payload) => ({
    type: c.SET_ATTR,
    payload
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
        types: [{ type: c.CREATE_REPORT_REQUEST, payload: payload },
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
  reset: () => ({
    type: c.RESET
  })
};
