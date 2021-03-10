import React from 'react';
import { Link } from 'react-router-dom';

import { Country } from '../globalState'
const CountryList = ( { country }: Country ) => {
  
  return (
    <Link to="/">
      <li>
        <div>
          <img src={country.flag} alt="flag"/>
          <h4>{ country.name }</h4>
          <p>Population: { country.population }</p>
          <p>Region: { country.region }</p>
          <p>Capital: { country.capital }</p>
        </div>
      </li>
    </Link>
  );
}

export default CountryList;
