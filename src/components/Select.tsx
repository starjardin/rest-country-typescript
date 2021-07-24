import { useContext, useState } from 'react'
import styled from 'styled-components'

import { GlobalContext } from '../context/globalState'
import { DropDown, FieldsetStyles } from '../styles/SelectStyles'

export default function Select() {
	const [openDropDown, setOpenDropDown] = useState(false)
	const {
		state: { countries },
		dispatch,
	} = useContext(GlobalContext)
	const [selectedRegion, setSelectedRegion] = useState('')
	const regions: string[] = Array.from(
		countries.map((el: { region: string }) => el.region)
	)
	const uniqueRegions = Array.from(new Set(regions))

	function toggleOpen() {
		setOpenDropDown(!openDropDown)
	}

	// function handleCategory(e: React.MouseEvent<HTMLElement>) {
	function handleCategory(e: any) {
		setSelectedRegion(e.currentTarget.dataset.value)
		dispatch({
			type: 'SELECT_A_REGION',
			payload: e.currentTarget.dataset.value,
		})
	}

	const customSelectTriggerValue = openDropDown
		? 'Select category'
		: selectedRegion
		? selectedRegion
		: 'Find a region'

	return (
		<FieldsetStyles openDropDown={openDropDown}>
			<DropDown onClick={toggleOpen}>
				<CustomSelect openDropDown={openDropDown}>
					<CustomSelectTrigger>
						<span data-value={''} onClick={(e) => handleCategory(e)}>
							{customSelectTriggerValue}
						</span>
						<Arrow openDropDown={openDropDown} />
					</CustomSelectTrigger>
					{openDropDown && (
						<CustomOptions>
							{uniqueRegions.map((el: any, index) => (
								<CustomOption
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
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: capitalize;
	color: #c4c4c4;
`

const CustomSelect = styled.div<{ openDropDown?: boolean }>``
const CustomOption = styled.span`
	display: block;
	font-size: 16px;
	font-weight: normal;
	line-height: 1.63;
	letter-spacing: -0.52px;
	text-align: left;
	transition: all 0.5s;
	border-radius: 5px;
	color: #34394f;
	padding: 0 16px;
	position: relative;
	cursor: pointer;
	&:hover {
		cursor: pointer;
		color: #34394f;
		font-weight: 500;
		background-color: #e9e9e9;
	}
`
const CustomOptions = styled.div`
	position: absolute;
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
		left: ${({ openDropDown }) => (openDropDown ? '3px' : '3px')};
		transform: rotate(
			${({ openDropDown }) => (openDropDown ? '-45deg' : '45deg')}
		);
		background-color: #c4c4c4;
	}

	&::after {
		left: ${({ openDropDown }) => (openDropDown ? '3px' : '-3px')};
		transform: rotate(
			${({ openDropDown }) => (openDropDown ? '45deg' : '-45deg')}
		);
		background-color: #c4c4c4;
	}
`
