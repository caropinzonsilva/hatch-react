import { combineReducers } from 'redux';
import count from 'reducers/count.js';

const rootReducer = combineReducers({
  count,
});

export default rootReducer;
