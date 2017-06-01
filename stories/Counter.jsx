import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import Counter from 'components/Counter/Counter.jsx';

const counterProps = {
  count: 0,
  increment: action('increment'),
  decrement: action('decrement')
};

storiesOf('Counter', module)
  .add('text', () => (
    <Counter
      {...counterProps}
    />
  ));
