import styled from 'styled-components'
import { DarkMode } from '../interfaces'
import { lgViewport } from '../context/globalState'
import { AppContainer } from './GlobalStyles'

export const CountryDetailsStyles = styled.div<DarkMode>`
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

export const CountryDetailsContainer = styled.div<DarkMode>`
	${AppContainer};
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#ffffff')};
	height: 100%;
`

export const FlagContainer = styled.div`
	flex-basis: 40%;
`

export const TextContainer = styled.div`
	flex-basis: 60%;
`

export const TextWrapper = styled.div<DarkMode>`
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

export const BordersButtonStyles = styled.button<DarkMode>`
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

export const CountryName = styled.h3`
	font-size: 32px;
	font-weight: 800;
	margin: 0;
	padding: 0 0 1rem 0;
`
