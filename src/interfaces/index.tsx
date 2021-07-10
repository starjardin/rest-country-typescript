//* initial state type
export interface initialStateType {
  isLoading: boolean,
  countries: CountriesType[],
  searchByName: string
  region: string
}

export interface CurrenciesType {
  name: string,
}

export interface LanguagesType {
  name: string,
}


//*Action type
export type Action =
  | { type: "fetchData", payload: [] }
  | { type: "searchByName", payload: string, search?: string }
  | { type: "SELECT_A_REGION", payload: string }


export interface CountriesType {
  alpha2Code: string,
  alpha3Code: string,
  area: number,
  altSpellings: string[],
  borders: string[],
  callingCodes: number[],
  capital: string,
  cioc: string,
  currencies: CurrenciesType[],
  demonym: string,
  flag: string,
  gini: number,
  languages: LanguagesType[],
  latlng: number[],
  name: string,
  nativeName: string,
  numericCode: string,
  population: number,
  region: string,
  subregion: string,
  timezones: string,
  topLevelDomain: string[],
}

//*State type
export interface StateType {
  isLoading: boolean,
  countries: CountriesType[],
  searchByName: string
  region: string
}