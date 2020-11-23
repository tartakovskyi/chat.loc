import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, GET_AUTH } from '../constants'

const initialState = {is_auth : false, auth: null};

export default function user(state = initialState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
		return {}

		case LOGIN_SUCCESS:
		return {}

		case LOGIN_FAIL:
		return {}

		case LOGOUT_SUCCESS:
		return {}

		case GET_AUTH:
		console.log('test')
		console.log(action.payload)
		/*return {
			auth: action.payload,
			is_auth: true
		}*/

		return Object.assign({}, state, {
        auth: action.payload,
			is_auth: true
      })

		default:
		return state
	}
}