import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/AuthedUser'
import Button from 'react-bootstrap/Button';

class Nav extends Component{

	setAuthedUserToNull = () => {
		this.props.dispatch(setAuthedUser(null))
	}

	render(){

		let imgURL = ""
		let userName = ""
		let greeting=""
		if(this.props.users[this.props.authedUser]!==undefined){
			
			imgURL=this.props.users[this.props.authedUser].avatarURL
			userName = this.props.users[this.props.authedUser].name
			greeting = `Hello, ${userName}`

		}else{

			imgURL = ""
			userName = ""
			greeting=""

		}

		return(
			<nav>
				<NavLink className='navElements' to="/">Home</NavLink>
				<NavLink className='navElements' to="/add">New Question</NavLink>
				<NavLink className='navElements' to="/leaderboard">Leader Board</NavLink>
				{this.props.users[this.props.authedUser]!==undefined
					?	
						<Fragment>
						<p className='navElements' >{greeting}</p>
						<img className='navElements' src={imgURL} alt={`${userName}`}/>
						<Button className='navElements' variant="warning" onClick={this.setAuthedUserToNull}>Log Out</Button>
						</Fragment>
					:<p></p>
				}
				
			</nav>

		)
	}
}

function mapStateToProps({ users,authedUser}){
	return{
		users: users,
		authedUser: authedUser,
	}
}

export default connect(mapStateToProps)(Nav);