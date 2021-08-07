import { FC } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { DarkMode } from '../interfaces'
import styled from 'styled-components'

export const BackButton: FC<DarkMode> = ({ darkMode }) => {
	return (
		<BackButtonWrapper darkMode={darkMode}>
			<ButtonStyles darkMode={darkMode}>
				<Link to='/'>
					<BsArrowLeft /> <span>Back</span>
				</Link>
			</ButtonStyles>
		</BackButtonWrapper>
	)
}

const BackButtonWrapper = styled.div<DarkMode>`
	padding: 4rem 0;
	background-color: ${({ darkMode }) => (darkMode ? '#212E37' : '#fff')};
`

const ButtonStyles = styled.button<DarkMode>`
	padding: 12px 35px;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#fff')};
	border: none;
	border-radius: 5px;
	box-shadow: 0 0 1px 2px
		${({ darkMode }) => (darkMode ? '#111518' : '#DFDFDF')};
	cursor: pointer;
	margin: 0;

	a {
		text-decoration: none;
		color: ${({ darkMode }) => (darkMode ? '#fff' : '#212E37')};
		display: flex;
		align-items: center;
		gap: 4px;
	}
`
