
import { _getUsers } from '../utils/_DATA.js'
import { getUsers } from './users'
import { _getQuestions } from '../utils/_DATA.js'
import { getQuestions } from './questions'

function getInitialData(){
	return Promise.all([
			_getUsers(),
			_getQuestions(),
		])
		.then(([users, questions]) => ({
			users,
			questions,
		}))
}

export function handleInitialData(){
	return(dispatch) => {
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(getUsers(users))
				dispatch(getQuestions(questions))
			})
			.catch((error) => {
				console.log('ERROR', error)
			})
	}
}