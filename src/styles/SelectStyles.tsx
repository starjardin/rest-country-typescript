import styled from 'styled-components'

export const DropDown = styled.div`
	position: relative;
`

export const FieldsetStyles = styled.fieldset<{ openDropDown: boolean }>`
	border-radius: 5px;
	border: solid 2px #c4c4c4;
	max-width: 436px;
	padding: 16px 20px;
	margin: 0;
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
