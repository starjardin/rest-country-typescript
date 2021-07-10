import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FC } from 'react';

import { CountriesType } from '../interfaces'

const ListStyles = styled.li`
  list-style: none;
  background-color: '#eeeeee';
  padding: 0;
  img {
    width: 100%;
    hight: 100%;
  }
`
const Card = styled.div`
  
`

const CountryList: FC<{country: CountriesType }> = ({country}) => {

  return (
    <Link to={`/country/${country.capital}`}>
      <ListStyles>
        <Card>
          <img src={country.flag} alt="flag"/>
          <h4>{ country.name }</h4>
          <p>Population: { country.population }</p>
          <p>Region: { country.region }</p>
          <p>Capital: { country.capital }</p>
        </Card>
      </ListStyles>
    </Link>
  );
}

export default CountryList;
