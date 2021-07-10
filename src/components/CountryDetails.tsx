import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { GlobalContext } from "../context/globalState"
import {CountriesType, CurrenciesType, LanguagesType} from '../interfaces'

interface capitalType {
  capital: string
}

const CountryDetailsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-child(1) {
    flex-basis: 50%;
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
`

const TextContainer = styled.div`
`


export default function CountryDetails() {
  const {capital} : capitalType = useParams()
  const {state: {countries}} = useContext(GlobalContext)
  const country = countries.find((el: CountriesType) => el.capital === capital)
  
  const languages = country?.languages.map((item: LanguagesType) => <span key={item.name}> {item.name} </span>)
  const currencies = country?.currencies.map((item: CurrenciesType) => <span key={item.name}> {item.name} </span>)
  const borders = country?.borders.map((item: string) => (
    <Link to={`/country/${item}`} key={item}>
      <button> {item} </button>
    </Link>
  ))
            

  return (
    <CountryDetailsStyles>
      <img src={ country?.flag} alt={ country?.name}/>
      <TextContainer>
        <div>
          <div>
            <h3>{ country?.name}</h3>
            <p>Native name: { country?.nativeName}</p>
            <p>Population: { country?.population}</p>
            <p>Region: { country?.region}</p>
            <p>Sub region: { country?.subregion}</p>
            <p>Capital: { country?.capital}</p>
          </div>

          <div>
            <p>Top level domain: {country?.topLevelDomain}</p>
            <p>Currencies: {currencies}</p>
            <p>Languages: {languages}</p>
          </div>

        </div>

        <div>
          <p>Border countries: </p>
          <div>{borders}</div>
        </div>
      </TextContainer>
    </CountryDetailsStyles>
  )
}
