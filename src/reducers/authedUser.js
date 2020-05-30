import { SET_AUTHED_USER, GET_AUTHED_USER} from '../actions/AuthedUser.js'

export default function authedUser (state=null, action){
	switch(action.type){
		case SET_AUTHED_USER:
			return action.id
		case GET_AUTHED_USER:
			return state
		default:
			return state
	}
}