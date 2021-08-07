import { useContext } from 'react'
import styled from 'styled-components'
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5'

import { GlobalContext, lgViewport } from '../context/globalState'
import { DarkMode } from '../interfaces'
import { AppContainer } from '../styles/GlobalStyles'

const HeaderStyles = styled.div<DarkMode>`
	${AppContainer};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	border-bottom: 3px solid
		${({ darkMode }) => (darkMode ? '#111518' : '#fafafa')};
	h2 {
		font-weight: 800;
		font-size: 1rem;
		color: ${({ darkMode }) => (darkMode ? '#FEFFFD' : '#111518')};
		@media (min-width: ${lgViewport}) {
			font-size: 2rem;
		}
	}
`

const DarkModeStyles = styled.button<DarkMode>`
	cursor: pointer;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	color: ${({ darkMode }) => (darkMode ? '#FEFFFD' : '#111518')};
	padding: 10px;
	border: none;
	font-size: 1rem;
	font-weight: 300;
	display: flex;
	align-items: center;
	gap: 10px;
	&:focus {
		outline: none;
	}
	@media (min-width: ${lgViewport}) {
		font-size: 1.5rem;
	}
`

const Header = () => {
	const {
		state: { darkMode },
		dispatch,
	} = useContext(GlobalContext)

	const icon = darkMode ? <IoMoonOutline /> : <IoMoonSharp />

	return (
		<HeaderStyles darkMode={darkMode}>
			<h2>Where in the world?</h2>
			<DarkModeStyles
				darkMode={darkMode}
				onClick={() => {
					dispatch({
						type: 'CHANGE_MODE',
					})
				}}>
				{icon}
				{darkMode ? 'Light mode' : 'Dark mode'}
			</DarkModeStyles>
		</HeaderStyles>
	)
}

export default Header
