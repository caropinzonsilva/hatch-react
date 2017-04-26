import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';

let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
  });
}

function configureStore(initialState) {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  return createStore(
    reducer,
    initialState,
    enhancer
  );
}

export default configureStore;
