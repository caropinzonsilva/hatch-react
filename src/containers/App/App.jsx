import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/count.js';
import Container from '../../components/Container/Container.jsx';
import Header from '../../components/Header/Header.jsx';
import Counter from '../../components/Counter/Counter.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
        </Container>
        <Container>
          <Counter
            count={this.props.count}
            increment={this.props.increment}
            decrement={this.props.decrement}
          />
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
