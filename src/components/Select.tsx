import { useContext, useState } from 'react';

import { GlobalContext } from '../context/globalState';
import {DropDown, 
FieldsetStyles} from '../styles/SelectStyles'

export default function Select() {
	const [ openDropDown, setOpenDropDown ] = useState(false)
	const { state : {countries}, dispatch } = useContext(GlobalContext)
  const [selectedRegion, setSelectedRegion] = useState('')
  const regions: string[] = Array.from(countries.map((el: {region: string}) => el.region));
  const uniqueRegions = Array.from(new Set(regions))

	function toggleOpen() {
		setOpenDropDown(!openDropDown)
	}

	// function handleCategory(e: React.MouseEvent<HTMLElement>) {
	function handleCategory(e: any) {
    setSelectedRegion(e.currentTarget.dataset.value)
		dispatch({
			type: 'SELECT_A_REGION',
			payload: e.currentTarget.dataset.value
		})
	}

	
	const fieldsetClass = `${openDropDown ? 'open-dropdown' : ''} ${!openDropDown ? 'focus' : ''}`
	const customSelectClass = openDropDown ? 'custom-select open' : 'custom-select'
	const customSelectTriggerClass = `custom-select__trigger ? 'focus' : ''}`
  const customSelectTriggerValue = openDropDown ? 'Select category' : selectedRegion ? selectedRegion : 'Find a region'

	return (
		<FieldsetStyles
			className={fieldsetClass}>
			<DropDown className='custom-select-wrapper' onClick={toggleOpen}>
				<div className={customSelectClass}>
					<div className={customSelectTriggerClass}>
						<span data-value={''} onClick={(e) => handleCategory(e)}>
							{customSelectTriggerValue}
						</span>
						<div className='arrow' />
					</div>
					{openDropDown && (
						<div className='custom-options'>
							{uniqueRegions.map((el: any, index) => (
                <span className='custom-option ' key={index} data-value={el} onClick={(e) => handleCategory(e)}>
                  {el}
                </span>
              ))}
						</div>
					)}
				</div>
			</DropDown>
		</FieldsetStyles>
	)
}



