import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import liveCounter          from './captain/live_counter';

export default combineReducers({
  counter,
  liveCounter,
  routing: routeReducer
});
