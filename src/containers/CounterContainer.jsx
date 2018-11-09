import React, { useMemo, useState } from 'react';
import { create } from 'microstates';
import Counter from 'components/Counter/Counter.jsx';

function CounterContainer() {
  const initialState = useMemo(() => create(Number, 0), [Number, 0]);
  const [counter, setState] = useState(initialState);
  return (
    <Counter
      count={counter.state}
      increment={() => setState(counter.increment())}
      decrement={() => setState(counter.decrement())}
    />
  );
}

export default CounterContainer;
