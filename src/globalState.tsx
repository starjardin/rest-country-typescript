import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

//*Action type
type Action =
  | { type: "fetchData", payload: [] }
  | { type: "searchByName", payload: string, search?: string }

export type Country = {
  country: {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: number[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string,
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: object[],
    languages: object[],
    cioc: string,
    flag: string,
  }
}


//*State type
interface State {
  isLoading: boolean,
  countries: [],
  searchByName: string
}

//* initial state type
interface initialStateTye {
  isLoading: boolean,
  countries: [],
  searchByName: string
  searchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
}

//* initial state
const initialState: initialStateTye = {
  isLoading: true,
  countries: [],
  searchByName: '',
  searchFunction : () => {}
}

//*GlobalContext declaration
export const GlobalContext = createContext(initialState)

//* Reducer function
const reducer = ( state: State, action: Action ) => {
  switch(action.type) {
    case "fetchData": {
      return {
        ...state,
        isLoading: false,
        countries: action.payload
      }
      //! here is the fetch when the app first loading
    }
    case "searchByName": {
      return {
        ...state,
        searchByName: action.payload
      }
     }
    default: return state
  }
}

//*Context porvider component
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
      isLoading: state.isLoading,
      countries: state.countries,
      searchByName: state.searchByName,
      searchFunction: (e) => dispatch( {
        type: "searchByName",
        payload: e.target.value
      } )
    } }>
      { children }
    </GlobalContext.Provider>
  )
}