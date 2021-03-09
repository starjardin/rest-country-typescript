import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
//*GlobalContext declaration

//*Action type
interface Action {
  type: "fetchData" | "searchByName",
  payload: [],
  search?: string,
}

//*State type
interface State {
  isLoading: boolean,
  countries: [],
  searchByName?: string
}

//* initial state type
interface initialStateTye {
  isLoading: boolean,
  countries: [],
  searchByName?: string
  searchFunction : () => void
}

//* initial state
const initialState: initialStateTye = {
  isLoading: true,
  countries: [],
  searchByName: '',
  searchFunction : () => {},
}

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
        searchByName: action.search
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
      searchFunction: () => dispatch( {
        type: "searchByName",
        payload: []
      } )
    } }>
      { children }
    </GlobalContext.Provider>
  )
}