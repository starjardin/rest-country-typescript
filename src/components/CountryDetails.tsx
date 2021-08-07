import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackButton } from './BackButton'

import { GlobalContext } from '../context/globalState'
import {
	CountryDetailsStyles,
	CountryDetailsContainer,
	FlagContainer,
	TextContainer,
	TextWrapper,
	CountryName,
	BordersButtonStyles,
} from '../styles/CountryDetailsStyles'
import { CountriesType, CurrenciesType, LanguagesType } from '../interfaces'
interface capitalType {
	alpha3Code: string
}

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
