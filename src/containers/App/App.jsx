import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header.jsx';
import Counter from '../../components/Counter/Counter.jsx';
import * as CounterActions from '../../actions/index.js';

const App = ({ count, actions }) => (
  <div>
    <Header />
    <Counter
      count={count}
      increment={actions.increment}
      decrement={actions.decrement}
    />
  </div>
);

App.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
