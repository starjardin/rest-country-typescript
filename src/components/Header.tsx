import { useContext } from 'react'
import styled from 'styled-components'
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5'

import { GlobalContext } from '../context/globalState'
import { DarkMode } from '../interfaces'
import { AppContainer } from '../GlobalStyles'

const HeaderStyles = styled.div<DarkMode>`
	${AppContainer};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	border-bottom: 3px solid
		${({ darkMode }) => (darkMode ? '#111518' : '#fafafa')};
	h2 {
		color: ${({ darkMode }) => (darkMode ? '#FEFFFD' : '#111518')};
	}
`

const DarkModeStyles = styled.button<DarkMode>`
	cursor: pointer;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	padding: 10px;
	border: none;
	&:focus {
		outline: none;
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
