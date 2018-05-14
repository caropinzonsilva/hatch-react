import { INCREMENT, DECREMENT } from 'actions/count.js';

export default function count(state = 0, action) {
  switch (action.type) {
    case 'RESET':
      return 0;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
