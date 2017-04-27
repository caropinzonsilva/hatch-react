import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from 'reducers/index.js';


function configureStore(initialState) {
  const middlewares = [thunk];
  let enhancer = applyMiddleware(...middlewares);

  /* eslint-disable no-underscore-dangle */
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(
      window.__REDUX_DEVTOOLS_EXTENSION__(),
      enhancer
    );
  }
  /* eslint-enable */

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducer,
    initialState,
    enhancer
  );
}

export default configureStore;
