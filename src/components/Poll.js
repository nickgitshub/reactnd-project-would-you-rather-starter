import React from 'react'

function Poll(props){
	const { userAnswer } = props
	const optionOneLength = props.question.optionOne.votes.length
	const optionTwoLength = props.question.optionTwo.votes.length

	let optionOneStyle = {}
	let optionTwoStyle = {}
	if(userAnswer==="optionOne"){
		optionOneStyle = {
			borderStyle: 'solid',
			borderColor: 'red'
		}
	}else if(userAnswer==="optionTwo") {
		optionTwoStyle = {

			borderStyle: 'solid',
			borderColor: 'red'
		}

	}

	return(
		<div className="poll">
			<img src={props.avatarURL} alt={"Picture of " + props.questionAuthor}/>
			<h2>Results</h2>

			{userAnswer==="optionOne"
					? <h2 style={{color: 'red'}}>Your Selected Answer</h2>
					:<h2> </h2>
			}
			<div style={optionOneStyle}>
				
				<h3>Would you rather {props.optionOneText}?</h3>
				<p>{optionOneLength} out of {props.totalVotes} votes</p>
				<p>{Math.round(optionOneLength/props.totalVotes*10000)/100}% of voters selected this option</p>
			</div>

			{userAnswer==="optionTwo"
					? <h2 style={{color: 'red'}}>Your Selected Answer</h2>
					:<h2> </h2>
			}
			<div style={optionTwoStyle}>
				
				<h3>Would you rather {props.optionTwoText}?</h3>
				<p>{optionTwoLength} out of {props.totalVotes} votes</p>
				<p>{Math.round(optionTwoLength/props.totalVotes*10000)/100}% of voters selected this option</p>
			</div>
			
		</div>
	)
}

export default Poll;