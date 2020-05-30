import React from 'react'
import { NavLink } from 'react-router-dom'

const PleaseSignIn = () => {
	return(
		<div className = "login">
			<h2>Please sign in before accessing this page</h2>
			<NavLink to="/"><button> Return to Login</button></NavLink>
		</div>
	)	
}

export default PleaseSignIn