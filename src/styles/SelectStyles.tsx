import styled from 'styled-components'

export const DropDown = styled.div`
	position: relative;
`

interface FieldsetProps {
	darkMode: boolean
	openDropDown: boolean
}

export const FieldsetStyles = styled.fieldset<FieldsetProps>`
	border-radius: 5px;
	border-color: transparent;
	position: relative;
	min-width: 200px;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	max-width: 436px;
	padding: 16px 20px;

	@media (max-width: 820px) {
		margin: 16px 0;
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
