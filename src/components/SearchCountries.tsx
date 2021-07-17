import { useContext } from 'react';
import styled from 'styled-components'
import {IoSearchSharp} from 'react-icons/io5'

import { GlobalContext } from '../context/globalState';
import Select from './Select';

const InputStyles = styled.input`
  border: none;
  padding: 0rem 4rem;
  box-shadow: 0 0 1px 2px #f4f4f4;
  border-radius: 3px;
  width: 100%;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 2px #141414;
  }
`

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  span {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-40%);
  }
`

const FormStyles = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SearchCountries = () => {
  const { dispatch } = useContext( GlobalContext )

  const onChangeFunction = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    dispatch({
      type: 'searchByName',
      payload: newValue
    })
  }
  
  return (
      <FormStyles action="#">
        <SearchContainer>
          <span>
            <IoSearchSharp />
          </span>
          <InputStyles
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Search for a country..."
            onChange={ (e) => onChangeFunction(e) }
            autoComplete='off'
          />
        </SearchContainer>
        <Select />
      </FormStyles>
  );
}



export default SearchCountries;
