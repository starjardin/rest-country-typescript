import { useContext } from 'react';

import CountryList from './CountryList'
import { GlobalContext } from '../context/globalState'
import SearchCountries from './SearchCountries';
import styled from 'styled-components';

type Country = {
  name: string
}

const CountryLayout = styled.ul`
  display: grid;
  grid-template-columns:  repeat(auto-fill, minmax(230px, 1fr));
  gap: 15px;
`

const Home = () => {
  const { state } = useContext( GlobalContext )
  const { countries, isLoading, searchByName, region } = state
  console.log(countries);
  
  
   const searchByNameToLowerCase = searchByName.toLowerCase()

   const listOfCountries =  countries.length &&
    countries
    .filter( ( item: Country ) => item.name
      .toLowerCase()
      .includes( searchByNameToLowerCase ) )
    .filter((el: any) => el.region === region)
    .map( ( country, index ) => (
      <CountryList country={country} key={index}  />
    ) 
  )
            
  return (
    <div>
      {isLoading ? <h2>Loading.....</h2> :
        <>
          <SearchCountries />
          <CountryLayout>
            {listOfCountries}
          </CountryLayout>
        </>
      }
    </div>
  );
}

export default Home;
