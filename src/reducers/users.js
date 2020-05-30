import { GET_USERS } from '../actions/users'
import { ADD_USER_QUESTION, ADD_USER_ANSWER } from '../actions/questions'

export default function users (state = {}, action){
	switch(action.type){
		case GET_USERS:
			return{
				...action.users
			}
		case ADD_USER_QUESTION: 
			return Object.assign({}, state, {
				[action.question.author]: {
					...state[action.question.author],
						questions: [
							...state[action.question.author].questions,
							action.question.id
						]
				}
				
			})
		case ADD_USER_ANSWER:
			return Object.assign({}, state, {
				[action.question.authedUser]: {
					...state[action.question.authedUser],
					answers: {
						...state[action.question.authedUser].answers,
						[action.question.qid]: action.question.answer
					}
				}
			})

		default: 
			return state; 
	}
}