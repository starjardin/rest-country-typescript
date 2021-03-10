import React from 'react';
import { Route, Switch } from 'react-router';

import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="///">
          skasdf
        </Route>
      </Switch>
    </div>
  );
}

export default App;
