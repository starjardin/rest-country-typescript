import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
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
