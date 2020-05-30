import React from 'react'
import { NavLink } from 'react-router-dom'

const QuestionBox = (props) => {
	return(
		<div className="question-box">
			<img src={props.avatarURL} alt={"Picture of " + props.author}/>
			<h2>{props.author} asks:</h2>
			<h3>Would you rather</h3>
			<p>...{props.optionOne}...</p>
			<NavLink to={props.navPath}><button>{props.buttonText}</button></NavLink>
		</div>
	)	
}

export default QuestionBox;