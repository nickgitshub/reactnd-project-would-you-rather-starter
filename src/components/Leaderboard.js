import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {


	render(){
		const users = this.props.users
		const usersSorted = Object.entries(users).sort((a,b)=> ((Object.entries(a[1].answers).length + a[1].questions.length)<(Object.entries(b[1].answers).length + b[1].questions.length)? 1:-1))
		const usersArray = usersSorted.map(user => user[1])

		return(
			<div className="leaderboard">
				{usersArray.map(user => 
					<div className="leaderBox" key={user.id}>
					<h2>{user.name}</h2>
					<img src={user.avatarURL} alt={"Picture of " + user.name}/>
					<p>Answered questions</p>
					<p>{Object.entries(user.answers).length}</p>
					<p>Created questions</p>
					<p>{user.questions.length}</p>

					<h3>Score</h3>
					<p>{Object.entries(user.answers).length + user.questions.length}</p>
					</div>
				)}
			</div>
		)
			
	}
}
function mapStateToProps({ users }){
	return{
		users,
	}
}
export default connect(mapStateToProps)(Leaderboard);