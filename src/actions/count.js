export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(count) {
  return {
    type: INCREMENT,
    count
  };
}

export function decrement(count) {
  return {
    type: DECREMENT,
    count
  };
}
