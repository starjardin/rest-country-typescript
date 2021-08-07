import { useContext } from 'react'
import styled from 'styled-components'
import { DarkMode } from '../interfaces'
import { GlobalContext, lgViewport } from '../context/globalState'

export const ResetSearchButton = () => {
	const {
		state: { darkMode },
		dispatch,
	} = useContext(GlobalContext)
	return (
		<ButtonStyles
			type='reset'
			darkMode={darkMode}
			onClick={() => dispatch({ type: 'RESET_SEARCH' })}>
			reset search
		</ButtonStyles>
	)
}

const ButtonStyles = styled.button<DarkMode>`
	border-radius: 5px;
	border-color: transparent;
	cursor: pointer;
	padding: 16px 20px;
	color: #c4c4c4;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	box-shadow: 0 0 1px 2px ${({ darkMode }) => (darkMode ? 'none' : '#f4f4f4')};
	width: 40%;
	text-transform: capitalize;
	@media (max-width: ${lgViewport}) {
		margin: 1rem 0 0 0;
		text-align: start;
		width: 100%;
	}

	@media (min-width: ${lgViewport}) {
		width: 25%;
	}
`
