import React from 'react';
import App from 'components/App/App.jsx';
import CounterContainer from 'containers/CounterContainer/CounterContainer.jsx';

function HomeView() {
  return (
    <App>
      <CounterContainer />
    </App>
  );
}

export default HomeView;
