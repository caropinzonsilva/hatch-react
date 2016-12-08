import './styles.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './components/Root/Root.jsx';

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);
