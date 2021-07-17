import { useContext } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import CountryList from './CountryList'
import { GlobalContext } from '../context/globalState'
import SearchCountries from './SearchCountries';
import {CountriesType} from '../interfaces'

const CountryLayout = styled.ul`
  display: grid;
  grid-template-columns:  repeat(auto-fill, minmax(230px, 1fr));
  gap: 15px;
  padding: 0;
`

const LoadingStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  background-color: #FAFAFA;
  padding: 4rem 0;
`

const Home = () => {
  const { state } = useContext( GlobalContext )
  const { countries, isLoading, searchByName, region } = state

   const searchByNameToLowerCase = searchByName.toLowerCase()

   const listOfCountries =  countries.length &&
    countries
    .filter( ( item: CountriesType ) => item.name
      .toLowerCase()
      .includes( searchByNameToLowerCase ) )
    .filter((el: CountriesType) => region ? el.region === region : el)
    .map( ( country, index ) => (
      <CountryList country ={country} key={index}  />
    ) 
  )
  
            
  return (
    <Container>
      {isLoading ? 
      <LoadingStyles>
        <Loader 
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </LoadingStyles>
       :
        <>
          <SearchCountries />
          <CountryLayout>
            {listOfCountries}
          </CountryLayout>
        </>
      }
    </Container>
  );
}

export default Home;
