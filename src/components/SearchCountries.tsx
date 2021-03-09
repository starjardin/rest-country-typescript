import React, { useContext } from 'react';
import styled from 'styled-components'

import { GlobalContext } from '../globalState';

const InputStyels = styled.input`
  border: none;
  padding: .4rem 1rem;
  box-shadow: 0 0 1px #ccc;
  
  &:focus {
    outline: none;
  }
`
const SearchCountries = () => {
  const { searchFunction } = useContext( GlobalContext )
  
  //TODO : need a funtion to fiter the stuff here.
  return (
    <div>
      <form action="#">
        <InputStyels
          type="text"
          placeholder="Search for a country..."
          onChange={ ( e: React.FormEvent<HTMLInputElement> ) => searchFunction() }
        />
      </form>
    </div>
  );
}

export default SearchCountries;
