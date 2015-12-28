import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import calculateViability   from './captain/calculate_viability';

export default combineReducers({
  counter,
  calculateViability,
  routing: routeReducer
});
