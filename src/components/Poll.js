import React from 'react'

function Poll(props){

	const optionOneLength = props.question.optionOne.votes.length
	const optionTwoLength = props.question.optionTwo.votes.length
	return(
		<div className="poll">
			<img src={props.avatarURL} alt={"Picture of " + props.questionAuthor}/>
			<h3>Asked by {props.questionAuthor}</h3>
			<h2>Results</h2>
			<h3>Would you rather {props.optionOneText}?</h3>
			<p>{optionOneLength} out of {props.totalVotes} votes</p>
			<p>{Math.round(optionOneLength/props.totalVotes*10000)/100}% of voters selected this option</p>
			<h3>Would you rather {props.optionTwoText}?</h3>
			<p>{optionTwoLength} out of {props.totalVotes} votes</p>
			<p>{Math.round(optionTwoLength/props.totalVotes*10000)/100}% of voters selected this option</p>

		</div>
	)
}

export default Poll;