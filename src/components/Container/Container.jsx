import React from 'react';
import classNames from 'classnames/bind';
import styles from './Container.scss';

const cx = classNames.bind(styles);

const Container = ({ children }) => (
  <div className={cx('Container')}>{children}</div>
);

export default Container;
