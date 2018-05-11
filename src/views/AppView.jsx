import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView.jsx';
import CounterView from 'views/CounterView.jsx';
import NotFoundView from 'views/NotFoundView.jsx';
import Header from 'components/Header/Header.jsx';
import Main from 'components/Main/Main.jsx';
import Footer from 'components/Footer/Footer.jsx';
import { hot } from 'react-hot-loader';

function AppView() {
  return (
    <div>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/counter" component={CounterView} />
          <Route path="/*" component={NotFoundView} />
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default hot(module)(AppView);
