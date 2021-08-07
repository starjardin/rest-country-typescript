import { useContext } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

import { GlobalContext } from '../context/globalState'
import { ResetSearchButton } from './ResetButton'
import Select from './Select'
import {
	InputStyles,
	SearchContainer,
	FormStyles,
} from '../styles/SearchCountriesStyles'

const SearchCountries = () => {
	const {
		state: { darkMode },
		dispatch,
	} = useContext(GlobalContext)

	const onChangeFunction = (e: React.FormEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value
		dispatch({
			type: 'SEARCH_BY_NAME',
			payload: newValue,
		})
	}

	return (
		<FormStyles action='#'>
			<SearchContainer>
				<span>
					<IoSearchSharp />
				</span>
				<InputStyles
					darkMode={darkMode}
					type='text'
					name='searchInput'
					id='searchInput'
					placeholder='Search for a country...'
					onChange={(e) => onChangeFunction(e)}
					autoComplete='off'
				/>
			</SearchContainer>
			<ResetSearchButton />
			<Select />
		</FormStyles>
	)
}

export default SearchCountries
