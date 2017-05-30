import React from 'react';
import CounterContainer from 'containers/CounterContainer/CounterContainer.jsx';
import Container from 'components/Container/Container.jsx';
import Header from 'components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <CounterContainer />
      </Container>
    </div>
  );
}

export default App;
