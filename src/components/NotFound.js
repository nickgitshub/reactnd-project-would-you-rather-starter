import React from 'react' 
import { NavLink } from 'react-router-dom'

const NotFound = () => {

	return(
		<div>
			<h2>404: Page Not Found</h2> 
			<p>Please return home and search for another page</p>
			<NavLink to="/"><button> Return to Login</button></NavLink>
		</div>
	)

}

export default NotFound; 