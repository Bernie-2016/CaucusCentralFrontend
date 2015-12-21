import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import adminUsers            from './admin/user_reducers';
import adminPrecincts        from './admin/precinct_reducers';

export default combineReducers({
  adminUsers,
  adminPrecincts,
  routing: routeReducer
});
