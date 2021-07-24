import { Action, StateType } from '../interfaces'
//* Reducer function
export const reducer = (state: StateType, action: Action) => {
	switch (action.type) {
		case 'FETCH_DATA': {
			return {
				...state,
				isLoading: false,
				countries: action.payload,
			}
		}
		case 'SEARCH_BY_NAME': {
			return {
				...state,
				searchByName: action.payload,
			}
		}
		case 'SELECT_A_REGION': {
			return {
				...state,
				region: action.payload,
			}
		}
		case 'CHANGE_MODE': {
			return {
				...state,
				darkMode: !state.darkMode,
			}
		}
		default:
			return state
	}
}
