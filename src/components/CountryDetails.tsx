import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import {BsArrowLeft} from 'react-icons/bs'


import { GlobalContext } from "../context/globalState"
import {CountriesType, CurrenciesType, LanguagesType} from '../interfaces'

interface capitalType {
  alpha3Code: string
}

const CountryDetailsStyles = styled.div`
  display: flex;
  gap: 10%;

  img {
    width: 100%;
    height: 100%;
  }
`

const FlagContainer = styled.div`
  flex-basis: 40%;
`

const TextContainer = styled.div`
  flex-basis: 60%;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
`

const BordersButtonStyles = styled.button`
  cursor: pointer;
  padding: 5px 16px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px #c1c1cd;
  cursor: pointer;
  margin: 5px 5px;
`

const CountryName = styled.h3`
  font-size: 32px;
  font-weight: 700;
`


export default function CountryDetails() {
  const {alpha3Code} : capitalType = useParams()
  const {state: {countries}} = useContext(GlobalContext)
  
  const country = countries.find((el: CountriesType) => el.alpha3Code === alpha3Code)
  
  const languages = country?.languages.map((item: LanguagesType) => <span key={item.name}> {item.name} </span>)
  const currencies = country?.currencies.map((item: CurrenciesType) => <span key={item.name}> {item.name} </span>)

  const borders = country?.borders.map((item: string) => (
    <Link to={`/country/${item}`} key={item}>
      <BordersButtonStyles> {
        countries.find(e => e.alpha3Code === item)?.name
      } </BordersButtonStyles>
    </Link>
  ))        

  return (
    <>
      <BackButton />
      <CountryDetailsStyles>
        <FlagContainer>
          <img src={ country?.flag} alt={ country?.name}/>
        </FlagContainer>
        <TextContainer>
          <TextWrapper>
            <div>
              <CountryName>{ country?.name}</CountryName>
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

          </TextWrapper>

          <div>
            <p>Border countries: {borders}</p>
          </div>
        </TextContainer>
      </CountryDetailsStyles>
    </>
  )
}

const BackButton = () => {
  return (
    <ButtonStyles>
      <Link to='/'>
        <BsArrowLeft/> <span>Back</span>
      </Link>
    </ButtonStyles>
  )
}


const ButtonStyles = styled.button`
  padding: 5px 16px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 1px 2px #c1c1cd;
  cursor: pointer;
  margin: 4rem 0;

  a {
    text-decoration: none;
    color: #111;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`