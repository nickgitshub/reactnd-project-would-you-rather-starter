import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import Poll from './Poll'
import Question from './Question'
import NotFound from './NotFound'


class Questions extends Component {

	state = {
		selectedOption: ""
	}

	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	}

	handleSubmission = (changeEvent) => {
		changeEvent.preventDefault()
	
		this.props.dispatch(handleAnswerQuestion(this.props.authedUser, this.props.match.params.questionId, this.state.selectedOption))
		this.forceUpdate();
	}

	render(){
		const question = this.props.questions[this.props.match.params.questionId]
		const users = this.props.users
		const authedUser = this.props.authedUser

		if(question){
			const optionOneText = question.optionOne.text
			const optionTwoText = question.optionTwo.text
			const combinedQuestionVotes =question.optionOne.votes.concat(question.optionTwo.votes)
			if(combinedQuestionVotes.find(user => user === this.props.authedUser)!==undefined){
				return(
					<Poll
						question={question}
						questionAuthor={users[question.author].name}
						avatarURL={users[question.author].avatarURL}
						optionOneText={optionOneText}
						optionTwoText={optionTwoText}
						totalVotes={combinedQuestionVotes.length}
						userAnswer={users[authedUser].answers[question.id]}
					/>
				)
			} else {
				return(
					<Question 
						handleOptionChange={this.handleOptionChange}
						handleSubmission={this.handleSubmission}
						questionAuthor={users[question.author].name}
						avatarURL={users[question.author].avatarURL}
						optionOneText={optionOneText}
						optionTwoText={optionTwoText}
					/> 
				)
			}
		} else {
			return (
				<NotFound /> 
			)
		}
		
	}
}
function mapStateToProps({ authedUser, questions, users }){
	return{
		authedUser,
		questions,
		users
	}
}
export default connect(mapStateToProps)(Questions);