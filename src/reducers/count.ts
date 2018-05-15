import { INCREMENT, DECREMENT } from 'actions/count';
import { DispatchableAction } from 'actions/action';

export default function count(state = 0, action: DispatchableAction) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
