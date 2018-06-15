import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/Counter/Counter.scss';

class Counter extends Component {
  render() {
    const { count, decrement, increment } = this.context;
    return (
      <div className={css.counter}>
        <h2 className={css.title}>Counter Component</h2>
        <div className={css.content}>
          <button type="button" className={css.button} onClick={decrement}>
            -
          </button>
          <span className={css.count}>{count}</span>
          <button type="button" className={css.button} onClick={increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

Counter.contextTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Counter;
