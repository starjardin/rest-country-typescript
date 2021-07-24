import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

import { StateType } from '../interfaces'
import { reducer } from './reducer'

//* initial state
const initialState: StateType = {
	isLoading: true,
	countries: [],
	searchByName: '',
	region: '',
	darkMode: false,
}

//*GlobalContext declaration
export const GlobalContext = createContext<{
	state: StateType
	dispatch: React.Dispatch<any>
}>({
	state: initialState,
	dispatch: () => null,
})

//*Context provider component
export const ContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	function fetchAllCountry() {
		axios(`https://restcountries.eu/rest/v2/all`).then((results) => {
			dispatch({
				type: 'FETCH_DATA',
				payload: results.data,
			})
		})
	}

	useEffect(() => {
		fetchAllCountry()
	}, [])

	return (
		<GlobalContext.Provider
			value={{
				dispatch,
				state,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}
