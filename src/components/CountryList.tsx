import React from 'react';

interface Country {
  country: {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: number[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string,
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: object[],
    languages: object[],
    cioc: string,
    flag: string,
  }
}

const CountryList: React.FC<Country> = ( { country } ) => {
  
  return (
    <li>
      <div>
        <img src={country.flag} alt="flag"/>
        <h4>{ country.name }</h4>
        <p>Population: { country.population }</p>
        <p>Region: { country.region }</p>
        <p>Capital: { country.capital }</p>
      </div>
    </li>
  );
}

export default CountryList;
