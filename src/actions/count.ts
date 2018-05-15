import { DispatchableAction } from './action';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(): DispatchableAction {
  return {
    type: INCREMENT,
  };
}

export function decrement(): DispatchableAction {
  return {
    type: DECREMENT,
  };
}
