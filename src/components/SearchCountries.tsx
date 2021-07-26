import { useContext } from 'react'
import styled from 'styled-components'
import { IoSearchSharp } from 'react-icons/io5'

import { GlobalContext, lgViewport } from '../context/globalState'
import Select from './Select'
import { DarkMode } from '../interfaces'

const InputStyles = styled.input<DarkMode>`
	@media (max-width: ${lgViewport}) {
		display: block;
		padding: 1.4rem 4rem;
		max-width: 500px;
	}
	border: none;
	padding: 0rem 4rem;
	box-shadow: 0 0 1px 2px ${({ darkMode }) => (darkMode ? 'none' : '#f4f4f4')};
	border-radius: 3px;
	width: 100%;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	@media (min-width: 820px) {
		min-width: calc(480px - 4rem);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 1px 2px #141414;
	}
`

const SearchContainer = styled.div`
	position: relative;
	display: flex;
	span {
		position: absolute;
		transform: translateY(-40%);
		top: 50%;
		left: 5%;
	}
`

const FormStyles = styled.form`
	@media (min-width: ${lgViewport}) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	padding-top: 4rem;
`
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
			<Select />
		</FormStyles>
	)
}

export default SearchCountries
