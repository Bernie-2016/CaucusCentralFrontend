import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import session                from './session';
import liveCounter            from './captain/live_counter';
import captain                from './captain/captain';
import adminUsers             from './admin/user_reducers';
import adminPrecincts         from './admin/precinct_reducers';
import adminStates            from './admin/states_reducers';
import adminState             from './admin/state_reducers';

export default combineReducers({
  liveCounter,
  adminUsers,
  adminPrecincts,
  adminStates,
  adminState,
  captain,
  session,
  routing: routeReducer
});
