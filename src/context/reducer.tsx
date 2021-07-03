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
      //! here is the fetch when the app first loading
    }
    case "searchByName": {
      console.log(action.payload);
      
      return {
        ...state,
        searchByName: action.payload
      }
     }
    default: return state
  }
}
