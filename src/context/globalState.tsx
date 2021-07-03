import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

import { initialStateType } from '../interfaces'
import {reducer} from './reducer'

//* initial state
const initialState: initialStateType = {
  isLoading: true,
  countries: [],
  searchByName: '',
  region: ''
}

//*GlobalContext declaration
export const GlobalContext = createContext<{
    state: initialStateType
    dispatch: React.Dispatch<any>
  }>({
    state: initialState,
    dispatch: () => null
})

//*Context provider component
export const ContextProvider: React.FC = ( { children } ) => {
  const [ state, dispatch ] = useReducer( reducer, initialState )
  
  function fetchAllCountry () {
    axios( `https://restcountries.eu/rest/v2/all` ).then( ( results ) => {
      dispatch( {
        type: "fetchData",
        payload: results.data
      } )
      })
  }
  
  useEffect( () => {
    fetchAllCountry()
  }, [] )
  
  return (
    <GlobalContext.Provider value={ {
      dispatch, state
    } }>
      { children }
    </GlobalContext.Provider>
  )
}

// isLoading: state.isLoading,
//       countries: state.countries,
//       searchByName: state.searchByName,
