import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('Header')}>
    <h1 className={cx('Header-title')}>hatch-react</h1>
    <p className={cx('Header-subTitle')}>A React starter kit.</p>
  </div>
);

export default Header;
