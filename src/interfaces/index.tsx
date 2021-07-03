//* initial state type
export interface initialStateType {
  isLoading: boolean,
  countries: [],
  searchByName: string
}

//*Action type
export type Action =
  | { type: "fetchData", payload: [] }
  | { type: "searchByName", payload: string, search?: string }


export interface CountryType {
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
export interface StateType {
  isLoading: boolean,
  countries: [],
  searchByName: string
}
