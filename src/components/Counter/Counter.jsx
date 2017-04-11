import React from 'react';
import classNames from 'classnames/bind';
import styles from './Counter.scss';

const cx = classNames.bind(styles);

const Counter = ({ count, increment, decrement }) => (
  <div className={cx('Counter')}>
    <h2 className={cx('Counter-title', 'Counter-title--big')}>Counter Component</h2>
    <div className={cx('Counter-content')}>
      <button className={cx('Counter-button')} onClick={decrement}>-</button>
      <span className={cx('Counter-count')}>{count}</span>
      <button className={cx('Counter-button')} onClick={increment}>+</button>
    </div>
  </div>
);

export default Counter;
