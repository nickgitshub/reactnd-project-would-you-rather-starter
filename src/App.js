import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import Nav from './components/Nav'
import Add from './components/Add'
import Leaderboard from './components/Leaderboard'
import Login from './components/Login'
import Home from './components/Home'
import Questions from './components/Questions'
import PleaseSignIn from './components/PleaseSignIn'

import { setAuthedUser } from './actions/AuthedUser'




class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
		this.props.dispatch(setAuthedUser("sarahedo"))
	}

	render() {
		const isAuthedUser = this.props.authedUser===null 

		return (
			<BrowserRouter>
				<Nav />
				{isAuthedUser 
				? 
					<Fragment>
						<Route exact path={'/'} component={Login} />
						<Route path={'/add'} component={PleaseSignIn} />
						<Route path={'/leaderboard'} component={PleaseSignIn} />
						<Route path={'/questions/:questionId'} component={PleaseSignIn} />	
					</Fragment>
				:
					<Fragment>
						<Route exact path={'/'} component={Home} />
						<Route path={'/add'} component={Add} />
						<Route path={'/leaderboard'} component={Leaderboard} />
						<Route path={'/questions/:questionId'} component={Questions} />	
					</Fragment>
				}
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