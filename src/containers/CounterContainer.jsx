import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from 'actions/count';
import Counter from 'components/Counter/Counter.jsx';

class CounterContainer extends Component {
  static childContextTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  getChildContext() {
    const { count, decrement, increment } = this.props;
    return { count, increment, decrement };
  }

  render() {
    return <Counter />;
  }
}

CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

function mapStateToProps({ count }) {
  return {
    count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
