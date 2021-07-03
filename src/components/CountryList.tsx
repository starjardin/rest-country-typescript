import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CountryType } from '../interfaces'

const ListStyles = styled.li`
  list-style: none;
  background-color: '#eeeeee';
  padding: 0;
  img {
    width: 100%;
    hight: auto;
  }
`

const CountryList = ( { country }: CountryType ) => {
  
  return (
    <Link to="/">
      <ListStyles>
        <div>
          <img src={country.flag} alt="flag"/>
          <h4>{ country.name }</h4>
          <p>Population: { country.population }</p>
          <p>Region: { country.region }</p>
          <p>Capital: { country.capital }</p>
        </div>
      </ListStyles>
    </Link>
  );
}

export default CountryList;
