import count from './count';
import { increment } from 'actions/count';

test('Count test', () => {
  const result = count(1, increment());
  console.log(result);
});
