import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/AuthedUser'

class Login extends Component{

	render(){
		const userObject = this.props.users
		const userKeys = Object.getOwnPropertyNames(userObject)
		function selectHandler(event, dispatchFunction){
			dispatchFunction(setAuthedUser(event.target.value))
		}

		return(
			<div className="login">
				<h2>Welcome to the Would You Rather App!</h2>
				<p>Please sign in to continue</p> 
				<select onChange={(event)=> selectHandler(event, this.props.dispatch)}>
					<option value={null} key="default">Please select a user</option>
					{userKeys.map((key) => 
						<option value={`${userObject[key].id}`} key={`${userObject[key].id}`}>
							{userObject[key].name}
						</option>
					)}
				</select>
			</div>
		)
	}
}

function mapStateToProps({ users,authedUser}){
	return{
		users: users,
		authedUser: authedUser,
	}
}

export default connect(mapStateToProps)(Login);