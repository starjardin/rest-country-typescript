import {Action, StateType} from '../interfaces'
//* Reducer function
export const reducer = ( state: StateType, action: Action ) => {
  switch(action.type) {
    case "fetchData": {
      return {
        ...state,
        isLoading: false,
        countries: action.payload
      }
    }
    case "searchByName": {
      return {
        ...state,
        searchByName: action.payload
      }
     }
    case "SELECT_A_REGION": {
      return {
        ...state,
        region: action.payload
      }
     }
    default: return state
  }
}
