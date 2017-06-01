import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import configureStore from 'configureStore.js';
import CounterContainer from 'containers/CounterContainer/CounterContainer.jsx';

const store = configureStore();
const counterProps = {
  count: 0,
  increment: action('increment'),
  decrement: action('decrement')
};

const storeDecorator = getStory => (
  <Provider store={store}>
    { getStory() }
  </Provider>
);

storiesOf('Counter', module)
  .addDecorator(storeDecorator)
  .add('Zero', () => (
    <CounterContainer
      {...counterProps}
    />
  ));
