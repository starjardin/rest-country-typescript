import React, { useContext } from 'react';

import CountryList from './CountryList'
import { GlobalContext } from '../globalState'
import SearchCountries from './SearchCountries';

type Country = {
  name: string
}

const Home = () => {
  const { countries, isLoading, searchByName } = useContext( GlobalContext )
  const searchByNameToLowerCase = searchByName.toLowerCase()
  
  return (
    <div>
      {isLoading ? <h2>Loading.....</h2> :
        <>
          <SearchCountries />
          <ul>
            { countries.length &&
              countries
              .filter( ( item: Country ) => item.name
                .toLowerCase()
                .includes( searchByNameToLowerCase ) )
              .map( ( country, index ) => (
              <CountryList country={country} key={index}  />
            ) )
            }
          </ul>
        </>
      }
    </div>
  );
}

export default Home;
