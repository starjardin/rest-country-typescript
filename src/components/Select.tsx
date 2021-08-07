import { useContext } from 'react'
import styled from 'styled-components'

import { GlobalContext } from '../context/globalState'
import { DropDown, FieldsetStyles } from '../styles/SelectStyles'
import { DarkMode } from '../interfaces'

export default function Select() {
	const {
		state: { countries, darkMode, openDropDown, region },
		dispatch,
	} = useContext(GlobalContext)
	const regions: string[] = Array.from(
		countries.map((el: { region: string }) => el.region)
	)
	const uniqueRegions = Array.from(new Set(regions))

	const toggleOpen = () => dispatch({ type: 'OPEN_DROP_DOWN' })

	function handleCategory(e: React.FormEvent<HTMLElement>) {
		dispatch({
			type: 'SELECT_A_REGION',
			payload: e.currentTarget.dataset.value,
		})
	}

	const customSelectTriggerValue = openDropDown
		? 'Select category'
		: region
		? region
		: 'Find a region'

	return (
		<FieldsetStyles
			darkMode={darkMode}
			openDropDown={openDropDown}
			onClick={toggleOpen}>
			<DropDown>
				<CustomSelect openDropDown={openDropDown}>
					<CustomSelectTrigger>
						<span onClick={(e) => handleCategory(e)}>
							{customSelectTriggerValue}
						</span>
						<Arrow openDropDown={openDropDown} />
					</CustomSelectTrigger>
					{openDropDown && (
						<CustomOptions darkMode={darkMode}>
							{uniqueRegions.map((el: string, index) => (
								<CustomOption
									darkMode={darkMode}
									key={index}
									data-value={el}
									onClick={(e) => handleCategory(e)}>
									{el}
								</CustomOption>
							))}
						</CustomOptions>
					)}
				</CustomSelect>
			</DropDown>
		</FieldsetStyles>
	)
}

const CustomSelectTrigger = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: capitalize;
	color: #c4c4c4;
`
const CustomSelect = styled.div<{ openDropDown?: boolean }>`
	padding: 0.3rem 0.3rem;
`

const CustomOption = styled.span<DarkMode>`
	display: block;
	font-size: 16px;
	font-weight: normal;
	line-height: 1.63;
	letter-spacing: -0.52px;
	text-align: left;
	transition: all 0.5s;
	border-radius: 5px;
	color: ${({ darkMode }) => (darkMode ? '#FFFEFF' : '#34394f')};
	padding: 5px 16px;
	cursor: pointer;
	&:hover {
		cursor: pointer;
		color: #34394f;
		font-weight: 500;
		background-color: #e9e9e9;
	}
`
const CustomOptions = styled.div<DarkMode>`
	position: absolute;
	background-color: ${({ darkMode }) => (darkMode ? '#2B3743' : '#FFFFFF')};
	top: 300%;
	left: -20px;
	padding: 20px;
	width: 100%;
`
const Arrow = styled.div<{ openDropDown: boolean }>`
	position: relative;
	height: 10px;
	width: 10px;

	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: 0px;
		width: 0.1rem;
		height: 100%;
		transition: all 0.5s;
	}

	&::before {
		left: 3px;
		transform: rotate(
			${({ openDropDown }) => (openDropDown ? '-45deg' : '45deg')}
		);
		background-color: #c4c4c4;
	}

	&::after {
		left: -3px;
		transform: rotate(
			${({ openDropDown }) => (openDropDown ? '45deg' : '-45deg')}
		);
		background-color: #c4c4c4;
	}
`
