import * as types from '../constants/ActionTypes.js';

export function increment(count) {
  return {
    type: types.INCREMENT,
    count
  };
}

export function decrement(count) {
  return {
    type: types.DECREMENT,
    count
  };
}
