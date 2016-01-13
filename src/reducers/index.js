import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import session                from './session';
import captainPrecinct        from './captain/precinct_reducers';
import adminUsers             from './admin/user_reducers';
import adminPrecincts         from './admin/precinct_reducers';
import adminStates            from './admin/states_reducers';
import adminState             from './admin/state_reducers';

export default combineReducers({
  adminUsers,
  adminPrecincts,
  adminStates,
  adminState,
  captainPrecinct,
  session,
  routing: routeReducer
});
