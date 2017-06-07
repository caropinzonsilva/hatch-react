import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { INCREMENT, DECREMENT } from 'actions/count.js';
import Counter from 'components/Counter/Counter.jsx';

const counterProps = {
  count: 0,
  increment: action(INCREMENT),
  decrement: action(DECREMENT)
};

storiesOf('Counter', module)
  .add('with count initialized to 0', () =>
    <Counter
      {...counterProps}
    />
  );
