import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import session                from './session';
import profile                from './profile/profile_reducers';
import captainPrecinct        from './captain/precinct_reducers';
import adminUsers             from './admin/users_reducers';
import adminUser              from './admin/user_reducers';
import adminPrecincts         from './admin/precincts_reducers';
import adminPrecinct          from './admin/precinct_reducers';
import adminStates            from './admin/states_reducers';
import adminState             from './admin/state_reducers';

export default combineReducers({
  adminUsers,
  adminUser,
  adminPrecincts,
  adminPrecinct,
  adminStates,
  adminState,
  captainPrecinct,
  profile,
  session,
  routing: routeReducer
});
