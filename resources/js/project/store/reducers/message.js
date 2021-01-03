import C from '../constants';

const initialState = {messages: []};

export default function message (state = initialState, action) {
	switch (action.type) {

		case C.GET_MESSAGES:
		state = {list: action.messages}
		return state
		
		default:
		return state
	}
}