import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/index.js';

import Container from '../../components/Container/Container.jsx';
import Header from '../../components/Header/Header.jsx';
import Counter from '../../components/Counter/Counter.jsx';

const App = ({ count, actions }) => (
  <div>
    <Container>
      <Header />
    </Container>
    <Container>
      <Counter
        count={count}
        increment={actions.increment}
        decrement={actions.decrement}
      />
    </Container>
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
