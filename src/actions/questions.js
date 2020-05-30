import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_QUESTION_ANSWER= 'ADD_QUESTION_ANSWER'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'


export function getQuestions(questions) {
	return{
		type: GET_QUESTIONS,
		questions,
	}
} 

export function addQuestion(question){
	return{
		type: ADD_QUESTION,
		question,
	}
}

export function addUserQuestion(question){
	return{
		type: ADD_USER_QUESTION,
		question,
	}
}

export function saveQuestion(optionOneText, optionTwoText, author){
	return (dispatch) => {
		return _saveQuestion({
			optionOneText,
			optionTwoText,
			author
		})
			.then((result) => {
				dispatch(addQuestion(result))
				dispatch(addUserQuestion(result))
			})
	}
}


export function addQuestionAnswer(question){
	return{
		type: ADD_QUESTION_ANSWER,
		question,
	}
}

export function addUserAnswer(question){
	return{
		type: ADD_USER_ANSWER,
		question
	}
}

export function handleAnswerQuestion(authedUser, qid, answer){
	console.log("HANDLE", authedUser, qid, answer)
	return(dispatch) => {
		_saveQuestionAnswer({
			authedUser,
			qid,
			answer,
		})
			.then(
				dispatch(addQuestionAnswer({authedUser, qid, answer})),
				dispatch(addUserAnswer({authedUser, qid, answer}))
			)
	}
}