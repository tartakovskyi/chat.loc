import C from '../constants';

const initialState = {list: []};

export default function messages (state = initialState, action) {
	switch (action.type) {

		case C.GET_MESSAGES:
		state = {list: action.messages}
		return state
		
		default:
		return state
	}
}