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
		case 'OPEN_DROP_DOWN': {
			return {
				...state,
				openDropDown: !state.openDropDown,
			}
		}
		case 'ClOSE_DROP_DOWN': {
			console.log('ClOSE_DROP_DOWN')

			return {
				...state,
				openDropDown: !state.openDropDown,
			}
		}
		case 'RESET_SEARCH': {
			return {
				...state,
				region: '',
				searchByName: '',
			}
		}
		default:
			return state
	}
}
