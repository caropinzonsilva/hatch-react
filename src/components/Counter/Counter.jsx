import React, { Component, PropTypes } from 'react';

const Counter = ({ count, increment, decrement }) => (
  <div>
    <p>Counter: {count}</p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default Counter;
