import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomeView from 'views/HomeView/HomeView.jsx';
import configureStore from 'configureStore.js';
import 'styles.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HomeView />
  </Provider>,
  document.getElementById('app')
);
