import styled from 'styled-components'
import { DarkMode } from '../interfaces'
import { lgViewport } from '../context/globalState'

export const InputStyles = styled.input<DarkMode>`
	@media (max-width: ${lgViewport}) {
		display: block;
		padding: 1.4rem 4rem;
	}
	border: none;
	padding: 0rem 4rem;
	box-shadow: 0 0 1px 2px ${({ darkMode }) => (darkMode ? 'none' : '#f4f4f4')};
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	border-radius: 3px;
	color: ${({ darkMode }) => (darkMode ? '#E5F2FB' : '#9D9D9D')};
	width: 100%;

	&::placeholder {
		color: #c4c4c4;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 1px 2px #141414;
	}
`

export const SearchContainer = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	span {
		position: absolute;
		transform: translateY(-40%);
		top: 50%;
		left: 5%;
	}
`

export const FormStyles = styled.form`
	@media (min-width: ${lgViewport}) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2%;
	}
	padding-top: 4rem;
`
