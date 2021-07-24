import { Route, Switch } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/country/:alpha3Code'>
					<CountryDetails />
				</Route>
			</Switch>
		</>
	)
}

export default App
