import React, { Component } from 'react';
import { Store, create } from 'microstates';
import Counter from 'components/Counter/Counter.jsx';

class CounterContainer extends Component {
  update = (counter) => {
    this.setState({ counter });
  };

  state = {
    counter: Store(create(Number, 0), this.update),
  };

  render() {
    const { counter } = this.state;
    return (
      <Counter
        count={counter.state}
        increment={() => counter.increment()}
        decrement={() => counter.decrement()}
      />
    );
  }
}

export default CounterContainer;
