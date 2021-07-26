import { useContext, FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'

import { GlobalContext, lgViewport } from '../context/globalState'
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
	font-size: 16px;
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#ffffff')};
	padding-bottom: 120px;
	img {
		width: 100%;
		height: 100%;
	}
	@media (min-width: ${lgViewport}) {
		display: flex;
		gap: 10%;
	}
`

const CountryDetailsContainer = styled.div<DarkMode>`
	${AppContainer};
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#ffffff')};
	height: 100%;
`

const FlagContainer = styled.div`
	flex-basis: 40%;
`

const TextContainer = styled.div`
	flex-basis: 60%;
`

const TextWrapper = styled.div<DarkMode>`
	color: ${({ darkMode }) => (darkMode ? '#fff' : '#111')};
	padding-top: 25px;
	span {
		font-weight: 600;
	}
	div {
		padding-top: 25px;
	}
	@media (min-width: ${lgViewport}) {
		gap: 10%;
		align-items: center;
		display: flex;
	}
`

const BordersButtonStyles = styled.button<DarkMode>`
	cursor: pointer;
	background-color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 2px;
	color: ${({ darkMode }) => (darkMode ? '#fff' : '#111')};
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#fafafa')};
	cursor: pointer;
	margin: 5px 5px;
	box-shadow: 0 0 1px 2px
		${({ darkMode }) => (darkMode ? '#2B3743' : '#DFDFDF')};
	@media (min-width: ${lgViewport}) {
		padding: 8px 16px;
	}
`

const CountryName = styled.h3`
	font-size: 32px;
	font-weight: 800;
	margin: 0;
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
							<p>
								<span>Native name</span>: {country?.nativeName}
							</p>
							<p>
								<span>Population:</span> {country?.population}
							</p>
							<p>
								<span>Region:</span> {country?.region}
							</p>
							<p>
								<span>Sub region:</span> {country?.subregion}
							</p>
							<p>
								<span>Capital:</span> {country?.capital}
							</p>
						</div>

						<div>
							<p>
								<span>Top level domain:</span> {country?.topLevelDomain}
							</p>
							<p>
								<span>Currencies:</span> {currencies}
							</p>
							<p>
								<span>Languages:</span> {languages}
							</p>
						</div>
					</TextWrapper>

					<TextWrapper darkMode={darkMode}>
						<p>
							<span>Border countries:</span> {borders}
						</p>
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
	padding: 12px 35px;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#fff')};
	border: none;
	border-radius: 5px;
	box-shadow: 0 0 1px 2px
		${({ darkMode }) => (darkMode ? '#111518' : '#DFDFDF')};
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
