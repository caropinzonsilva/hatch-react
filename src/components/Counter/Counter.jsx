import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  };

  render() {
    const {
      value,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <p>Counter</p>
    );
  }
}

export default Counter;
