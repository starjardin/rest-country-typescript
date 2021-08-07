import styled from 'styled-components'
import { FieldsetProps } from '../interfaces'
import { lgViewport } from '../context/globalState'

export const DropDown = styled.div`
	position: relative;
	width: 100%;
`

export const FieldsetStyles = styled.fieldset<FieldsetProps>`
	border-radius: 5px;
	border-color: transparent;
	position: relative;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	box-shadow: 0 0 1px 2px ${({ darkMode }) => (darkMode ? 'none' : '#f4f4f4')};
	padding: 16px 20px;
	margin: 16px 0;

	@media (min-width: ${lgViewport}) {
		max-width: 436px;
		min-width: 200px;
		margin: 0;
	}

	&.focus {
		border: solid 2px #34394f;

		.arrow::before {
			background-color: #34394f;
		}
		.arrow::after {
			background-color: #34394f;
		}
	}
`
