export interface CurrenciesType {
	name: string
}

export interface DarkMode {
	darkMode: boolean
}

export interface LanguagesType {
	name: string
}

//*Action type
export type Action =
	| { type: 'FETCH_DATA'; payload: [] }
	| { type: 'SEARCH_BY_NAME'; payload: string; search?: string }
	| { type: 'SELECT_A_REGION'; payload: string }
	| { type: 'CHANGE_MODE'; payload?: boolean }

export interface CountriesType {
	alpha2Code: string
	alpha3Code: string
	area: number
	altSpellings: string[]
	borders: string[]
	callingCodes: number[]
	capital: string
	cioc: string
	currencies: CurrenciesType[]
	demonym: string
	flag: string
	gini: number
	languages: LanguagesType[]
	latlng: number[]
	name: string
	nativeName: string
	numericCode: string
	population: number
	region: string
	subregion: string
	timezones: string
	topLevelDomain: string[]
}

//*State type
export interface StateType {
	isLoading: boolean
	countries: CountriesType[]
	searchByName: string
	region: string
	darkMode: boolean
}
