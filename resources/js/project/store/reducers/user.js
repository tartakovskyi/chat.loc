import C from '../constants';

const initialState = {is_auth : false, auth: null};

export default function user(state = initialState, action) {
	switch (action.type) {

		case C.GET_AUTH:
		state = {is_auth : true, auth: action.payload}
		return state

		case C.LOGOUT_SUCCESS:
		return initialState
		
		default:
		return state
	}
}