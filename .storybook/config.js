import '@babel/polyfill';
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'configureStore.js';

const globalStyles = {
  display: 'inlineBlock',
  overflow: 'auto',
  padding: '2rem',
  height: '100vh',
};

const store = configureStore();

addDecorator((story) => (
  <Provider store={store}>
    <Router>
      <div style={globalStyles}>{story()}</div>
    </Router>
  </Provider>
));

const req = require.context('../stories', true, /\.(jsx|js)$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
