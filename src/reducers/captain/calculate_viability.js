import { createReducer } from '../../utils';

const initialState = {
    is_viable: false,
    delegate_count: 0,
    for_one_more: 0,
    for_two_more: 0
};

var calculate_tally_payload = function(payload) {
    // calculate viability / call API backend here
};

export default function calculateViability(state = initialState, action) {
    switch(action.type){
        case 'TALLY_ATTENDEES':
            return calculate_tally_payload(action.payload);
        default:
            return state;
    }
};
