import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FC, useContext } from 'react'

import { CountriesType, DarkMode } from '../interfaces'
import { GlobalContext } from '../context/globalState'

const ListStyles = styled.li<DarkMode>`
	list-style: none;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	box-shadow: 0 0 3px 2px
		${({ darkMode }) => (darkMode ? '#2B3743' : '#F3FAFF')};
	border-radius: 5px;
	padding: 0;
	img {
		width: 100%;
		height: 160px;
		object-fit: cover;
	}
`
const Card = styled.div<DarkMode>`
	a {
		text-decoration: none;
		color: #111518;
	}
`

const CountyNameStyles = styled.h3<DarkMode>`
	color: ${({ darkMode }) => (darkMode ? '#F3FAFF' : '#111518')};
`
const TextContainer = styled.div`
	padding: 32px 32px 44px;
`

const TextStyles = styled.p<DarkMode>`
	color: ${({ darkMode }) => (darkMode ? '#F3FAFF' : '#111518')};
	span {
		color: ${({ darkMode }) => (darkMode ? '#F3FAFF' : '#111518')};
	}
`

const CountryList: FC<{ country: CountriesType }> = ({ country }) => {
	const {
		state: { darkMode },
	} = useContext(GlobalContext)

	return (
		<Card darkMode={darkMode}>
			<Link to={`/country/${country.alpha3Code}`}>
				<ListStyles darkMode={darkMode}>
					<img src={country.flag} alt='flag' />
					<TextContainer>
						<CountyNameStyles darkMode={darkMode}>
							{country.name}
						</CountyNameStyles>
						<TextStyles darkMode={darkMode}>
							Population: <span>{country.population}</span>
						</TextStyles>
						<TextStyles darkMode={darkMode}>
							Region: <span>{country.region}</span>
						</TextStyles>
						<TextStyles darkMode={darkMode}>
							Capital: <span>{country.capital}</span>
						</TextStyles>
					</TextContainer>
				</ListStyles>
			</Link>
		</Card>
	)
}

export default CountryList
