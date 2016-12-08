import React, { Component } from 'react';

import Header from '../../components/Header/Header.jsx';
import Counter from '../../components/Counter/Counter.jsx';

class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
      </div>
    );
  }
}

export default Root;
