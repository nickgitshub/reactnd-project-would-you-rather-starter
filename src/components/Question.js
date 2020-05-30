import React from 'react'

const Question = (props) => {
	return(
		<div className="questionForm">
		<form onSubmit={props.handleSubmission}>
			<img src={props.avatarURL} alt={"Picture of " + props.questionAuthor}/>
			<h2>Would You Rather</h2>
			<div className="formLabels">
				<label>
					<input 
						name="wyr"
						type="radio" 
						value="optionOne"
						onChange={props.handleOptionChange}
					/>
					{props.optionOneText}
				</label>
				<label>
					<input 
						name="wyr"
						type="radio" 
						value="optionTwo"
						onChange={props.handleOptionChange}
					/>
					{props.optionTwoText}
				</label>
			</div>
			<div>
			<button type="submit" >Submit</button>
			</div>
		</form>
		</div>
	)
}

export default Question; 