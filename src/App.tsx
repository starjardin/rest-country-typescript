import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import SearchCountries from './components/SearchCountries';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchCountries />
      <Home />
    </div>
  );
}

export default App;
