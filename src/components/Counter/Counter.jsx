import './Counter.scss';

import React from 'react';

const Counter = ({ count, increment, decrement }) => (
  <div className="Counter">
    <h2 className="Counter-title">Counter Component</h2>
    <div className="Counter-content">
      <button className="Counter-button" onClick={decrement}>-</button>
      <span className="Counter-count">{count}</span>
      <button className="Counter-button" onClick={increment}>+</button>
    </div>
  </div>
);

export default Counter;
