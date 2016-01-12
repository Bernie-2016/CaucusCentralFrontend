import rootReducer          from '../reducers';
import thunk                from 'redux-thunk';
import DevTools             from 'containers/DevTools';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import persistState         from 'redux-localstorage';

import { apiMiddleware } from 'redux-api-middleware';

export default function configureStore (initialState, debug = false) {
  let createStoreWithMiddleware;

  const middleware = compose(
                       applyMiddleware(thunk),
                       applyMiddleware(apiMiddleware)
                     );

  if (debug) {
    createStoreWithMiddleware = compose(
      middleware,
      persistState('session'),
      DevTools.instrument()
    );
  } else {
    createStoreWithMiddleware = compose(middleware);
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
