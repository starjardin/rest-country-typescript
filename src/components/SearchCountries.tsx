import { useContext } from 'react';
import styled from 'styled-components'

import { GlobalContext } from '../context/globalState';

const InputStyles = styled.input`
  border: none;
  padding: .4rem 1rem;
  box-shadow: 0 0 1px #ccc;
  
  &:focus {
    outline: none;
  }
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
  
  //TODO : need a function to filter the stuff here.
  return (
    <div>
      <form action="#">
        <InputStyles
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search for a country..."
          onChange={ (e) => onChangeFunction(e) }
        />
      </form>
    </div>
  );
}

export default SearchCountries;
