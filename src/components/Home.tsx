import { useContext } from 'react';

import CountryList from './CountryList'
import { GlobalContext } from '../context/globalState'
import SearchCountries from './SearchCountries';

type Country = {
  name: string
}

const Home = () => {
  const { state } = useContext( GlobalContext )
  const { countries, isLoading, searchByName } = state
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
