import { useContext } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import CountryList from './CountryList'
import { GlobalContext } from '../context/globalState'
import SearchCountries from './SearchCountries'
import { CountriesType, DarkMode } from '../interfaces'
import { AppContainer } from '../GlobalStyles'

const CountryLayout = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
	gap: 70px;
	padding: 4rem 0;
`

const LoadingStyles = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const Container = styled.div<DarkMode>`
	background-color: ${({ darkMode }) => (darkMode ? '#202D36' : '#fafafa')};
	padding: 4rem 0;
	${AppContainer};
`

const Home = () => {
	const {
		state: { countries, isLoading, searchByName, region, darkMode },
	} = useContext(GlobalContext)

	const searchByNameToLowerCase = searchByName.toLowerCase()

	const listOfCountries =
		countries.length &&
		countries
			.filter((item: CountriesType) =>
				item.name.toLowerCase().includes(searchByNameToLowerCase)
			)
			.filter((el: CountriesType) => (region ? el.region === region : el))
			.map((country, index) => <CountryList country={country} key={index} />)

	return (
		<Container darkMode={darkMode}>
			{isLoading ? (
				<LoadingStyles>
					<Loader type='Puff' color='#00BFFF' height={100} width={100} />
				</LoadingStyles>
			) : (
				<>
					<SearchCountries />
					<CountryLayout>{listOfCountries}</CountryLayout>
				</>
			)}
		</Container>
	)
}

export default Home
