import { createReducer } from '../../utils';

const initialState = {
    is_viable: false,
    to_become_viable: 0,
    delegate_count: 0,
    for_one_more: 0,
    for_two_more: 0
};

var calculate_tally_payload = function(payload) {
    // calculate viability / call API backend here

    // placeholder
    return {
        is_viable: false,
        to_become_viable: 1,
        delegate_count: 15,
        for_one_more: 15,
        for_two_more: 45
    }
};

export default function calculateViability(state = initialState, action) {
    switch(action.type){
        case 'TALLY_ATTENDEES':
            return calculate_tally_payload(action.payload);
        default:
            return state;
    }
};
