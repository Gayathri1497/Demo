import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./Component/login"
import Dashboard from "./Component/dashboard"
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/dashboard' component={Dashboard} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
