import { combineReducers } from 'redux';
import count from 'reducers/count.ts';

const rootReducer = combineReducers({
  count,
});

export default rootReducer;
