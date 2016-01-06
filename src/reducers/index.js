import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import liveCounter            from './captain/live_counter';
import captain                from './captain/captain';
import adminUsers             from './admin/user_reducers';
import adminPrecincts         from './admin/precinct_reducers';

export default combineReducers({
  liveCounter,
  adminUsers,
  adminPrecincts,
  captain,
  routing: routeReducer
});
