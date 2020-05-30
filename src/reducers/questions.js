import { GET_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action){
	switch(action.type){
		case GET_QUESTIONS:
			return{
				...action.questions
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			};

		case ADD_QUESTION_ANSWER:
			return Object.assign({}, state, { [action.question.qid]: {
					...state[action.question.qid],
					[action.question.answer]: {
						...state[action.question.qid][action.question.answer],
						votes: [
							...state[action.question.qid][action.question.answer].votes,
							action.question.authedUser
						]
					}
				}

			})
		default: 
			return state; 
	}
}