import React, { useContext } from 'react';

import CountryList from './CountryList'

import { GlobalContext } from '../globalState'

const Home = () => {
  const { countries, isLoading } = useContext( GlobalContext )
  
  return (
    <div>
      {isLoading ? <h2>Loading.....</h2> :
        <ul>
          { countries.length && countries.map( (country, index) => (
            <CountryList country={country} key={index}  />
          ) )
          }
        </ul>
      }
    </div>
  );
}

export default Home;
