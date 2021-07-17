import { Route, Switch } from 'react-router';

import Header from './components/Header';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:alpha3Code">
          <CountryDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
