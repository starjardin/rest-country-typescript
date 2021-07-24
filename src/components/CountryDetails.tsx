import { useContext, FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'

import { GlobalContext } from '../context/globalState'
import { AppContainer } from '../GlobalStyles'
import {
	CountriesType,
	CurrenciesType,
	LanguagesType,
	DarkMode,
} from '../interfaces'

interface capitalType {
	alpha3Code: string
}

const CountryDetailsStyles = styled.div<DarkMode>`
	display: flex;
	gap: 10%;
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#fafafa')};

	img {
		width: 100%;
		height: 100%;
	}
`

const CountryDetailsContainer = styled.div<DarkMode>`
	${AppContainer};
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#fafafa')};
	height: 100vh;
`

const FlagContainer = styled.div`
	flex-basis: 40%;
`

const TextContainer = styled.div`
	flex-basis: 60%;
`

const TextWrapper = styled.div<DarkMode>`
	display: flex;
	align-items: center;
	gap: 10%;
	color: ${({ darkMode }) => (darkMode ? '#fff' : '#111')};
`

const BordersButtonStyles = styled.button<DarkMode>`
	cursor: pointer;
	padding: 5px 16px;
	background-color: #fff;
	border: none;
	border-radius: 5px;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#fafafa')};
	cursor: pointer;
	margin: 5px 5px;
`

const CountryName = styled.h3`
	font-size: 32px;
	font-weight: 700;
`

export default function CountryDetails() {
	const { alpha3Code }: capitalType = useParams()
	const {
		state: { countries, darkMode },
	} = useContext(GlobalContext)

	const country = countries.find(
		(el: CountriesType) => el.alpha3Code === alpha3Code
	)

	const languages = country?.languages.map((item: LanguagesType) => (
		<span key={item.name}> {item.name} </span>
	))
	const currencies = country?.currencies.map((item: CurrenciesType) => (
		<span key={item.name}> {item.name} </span>
	))

	const borders = country?.borders.map((item: string) => (
		<Link to={`/country/${item}`} key={item}>
			<BordersButtonStyles darkMode={darkMode}>
				{countries.find((e) => e.alpha3Code === item)?.name}{' '}
			</BordersButtonStyles>
		</Link>
	))

	return (
		<CountryDetailsContainer darkMode={darkMode}>
			<BackButton darkMode={darkMode} />
			<CountryDetailsStyles darkMode={darkMode}>
				<FlagContainer>
					<img src={country?.flag} alt={country?.name} />
				</FlagContainer>
				<TextContainer>
					<TextWrapper darkMode={darkMode}>
						<div>
							<CountryName>{country?.name}</CountryName>
							<p>Native name: {country?.nativeName}</p>
							<p>Population: {country?.population}</p>
							<p>Region: {country?.region}</p>
							<p>Sub region: {country?.subregion}</p>
							<p>Capital: {country?.capital}</p>
						</div>

						<div>
							<p>Top level domain: {country?.topLevelDomain}</p>
							<p>Currencies: {currencies}</p>
							<p>Languages: {languages}</p>
						</div>
					</TextWrapper>

					<TextWrapper darkMode={darkMode}>
						<p>Border countries: {borders}</p>
					</TextWrapper>
				</TextContainer>
			</CountryDetailsStyles>
		</CountryDetailsContainer>
	)
}

const BackButton: FC<DarkMode> = ({ darkMode }) => {
	return (
		<BackButtonWrapper darkMode={darkMode}>
			<ButtonStyles darkMode={darkMode}>
				<Link to='/'>
					<BsArrowLeft /> <span>Back</span>
				</Link>
			</ButtonStyles>
		</BackButtonWrapper>
	)
}

const BackButtonWrapper = styled.div<DarkMode>`
	padding: 4rem 0;
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#fff')};
`

const ButtonStyles = styled.button<DarkMode>`
	padding: 5px 16px;
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#fff')};
	border: none;
	border-radius: 5px;
	box-shadow: 0 0 1px 2px #c1c1cd;
	cursor: pointer;
	margin: 0;

	a {
		text-decoration: none;
		color: ${({ darkMode }) => (darkMode ? '#fff' : '#212E37')};
		display: flex;
		align-items: center;
		gap: 4px;
	}
`
