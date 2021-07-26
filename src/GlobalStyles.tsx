import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'NunitoSans';
		font-style: normal;
		font-weight: 300;
		src: local('Nunito Sans'), local('NunitoSans'),
			url('../src/fonts/NunitoSans-300.woff2') format('woff2'), 
			url('../src/fonts/NunitoSans-300.woff') format('woff'), 
	}

	@font-face {
		font-family: 'NunitoSans';
		font-style: normal;
		font-weight: 600;
		src: local('Nunito Sans'), local('NunitoSans'),
			url('../src/fonts/NunitoSans-600.woff2') format('woff2'), 
			url('../src/fonts/NunitoSans-600.woff') format('woff'), 
	}

	@font-face {
		font-family: 'NunitoSans';
		font-style: normal;
		font-weight: 800;
		src: local('Nunito Sans'), local('NunitoSans'),
			url('../src/fonts/NunitoSans-800.woff2') format('woff2'), 
			url('../src/fonts/NunitoSans-800.woff') format('woff'), 
	}

  body {
    padding: 0;
    margin: 0;
		font-family: 'NunitoSans', Arial, Helvetica, sans-serif;
		font-size: 14px;
  }
`

export const AppContainer = css`
	padding: 0 30px;
	margin: 0;
	@media (min-width: 520px) {
		padding: 0 40px;
	}

	@media (min-width: 720px) {
		padding: 0 60px;
	}

	@media (min-width: 1020px) {
		padding: 0 80px;
	}
`
