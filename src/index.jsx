import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'configureStore.js';
import AppView from 'views/AppView.jsx';
import 'styles.scss';

const store = configureStore();

function renderApp(ui) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>,
    document.getElementById('app'),
  );
}

renderApp(<AppView />);

if (process.env.ENV === 'development' && module.hot) {
  module.hot.accept('views/AppView.jsx', () => {
    // eslint-disable-next-line global-require
    const UpdatedApp = require('views/AppView.jsx').default;
    renderApp(<UpdatedApp />);
  });
}
