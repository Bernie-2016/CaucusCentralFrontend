import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import liveCounter          from './captain/live_counter';
import adminUsers            from './admin/user_reducers';
import adminPrecincts        from './admin/precinct_reducers';

export default combineReducers({
  counter,
  liveCounter,
  adminUsers,
  adminPrecincts,
  routing: routeReducer
});
