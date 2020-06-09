import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import Nav from './components/Nav'
import Add from './components/Add'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Home from './components/Home'
import Questions from './components/Questions'




class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		const noAuthedUser = this.props.authedUser===null 
		const PrivateRoute = ({ component: Component, ...rest }) => (
			<Route {...rest} render={(props) => (
				noAuthedUser
					? 
						<Redirect to={{
							pathname: '/login',
							state: { from: props.location.pathname }
						}} />
					: 
						<Component {...props} />
			)} />
		)

		return (
			<BrowserRouter>
				<Nav />
					<Fragment>
						<Route path={'/login'} component={Login} />
						<PrivateRoute exact path={'/'} component={Home} />
						<PrivateRoute path={'/add'} component={Add} />
						<PrivateRoute path={'/leaderboard'} component={Leaderboard} />
						<PrivateRoute path={'/questions/:questionId'} component={Questions} />	
					</Fragment>
			</BrowserRouter>
		)
	}
}

function mapStateToProps({ users,authedUser, questions }){
	return{
		users,
		authedUser,
		questions,
	}
}

export default connect(mapStateToProps)(App);