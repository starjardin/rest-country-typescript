import { useContext } from 'react';
import styled from 'styled-components'

import { GlobalContext } from '../context/globalState';
import Select from './Select';

const InputStyles = styled.input`
  border: none;
  padding: .4rem 1rem;
  box-shadow: 0 0 1px #ccc;
  
  &:focus {
    outline: none;
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
        <InputStyles
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search for a country..."
          onChange={ (e) => onChangeFunction(e) }
        />
        <Select />
      </FormStyles>
  );
}



export default SearchCountries;
