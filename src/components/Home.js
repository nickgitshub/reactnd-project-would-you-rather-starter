import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionBox from './QuestionBox'


class Home extends Component {

	state = {
		currentType: "unanswered",
		headerText: "Unanswered Questions"
	}

	handleQuestionType = (changeEvent) => {
		this.setState({
			currentType: changeEvent.target.value,
			headerText: changeEvent.target.innerText
		})
	}

	render(){
		const authedUser = this.props.authedUser
		const usersObject = this.props.users
		const questionsObject = this.props.questions
		const questionsKeys = Object.getOwnPropertyNames(questionsObject)

		let answeredQuestions = []
		let unansweredQuestions = []

		for(let k = 0; k < questionsKeys.length; k++){
			const currentQuestion = questionsObject[questionsKeys[k]]
			const combinedQuestionVotes = currentQuestion.optionOne.votes.concat(currentQuestion.optionTwo.votes)
			if(combinedQuestionVotes.find(user => user === authedUser)===undefined){
				unansweredQuestions.unshift(currentQuestion.id)
			} else {
				answeredQuestions.unshift(currentQuestion.id)
			}
		}

		return(

			<div className="questionContainer">
				<div className="questionBoxes">
					<nav>
						<button onClick={this.handleQuestionType} value="unanswered"> Unanswered Questions</button>
						<button onClick={this.handleQuestionType} value="answered"> Answered Questions</button>
					</nav>
				</div>
				<div className="questionBoxes">
				<h1>{this.state.headerText}</h1>
				{this.state.currentType === "unanswered"
					?unansweredQuestions.map(questionId => 
						<QuestionBox 
							author={usersObject[questionsObject[questionId].author].name}
							avatarURL={usersObject[questionsObject[questionId].author].avatarURL}
							optionOne={questionsObject[questionId].optionOne.text}
							buttonText="Answer Question"
							navPath={`/questions/${questionId}`}
							key={questionId}
						/>
					)
					:answeredQuestions.map(questionId => 
						<QuestionBox 
							author={usersObject[questionsObject[questionId].author].name}
							avatarURL={usersObject[questionsObject[questionId].author].avatarURL}
							optionOne={questionsObject[questionId].optionOne.text}
							buttonText="View Poll"
							navPath={`/questions/${questionId}`}
							key={questionId}
						/>
					)

				}
				</div>
			</div>

		)	
	}
}


function mapStateToProps({ authedUser, questions, users }){
	return{
		authedUser,
		questions,
		users,
	}
}

export default connect(mapStateToProps)(Home);