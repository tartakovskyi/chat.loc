import C from '../constants';

const initialState = {chat: {}};

export default function chat (state = initialState, action) {
	switch (action.type) {

		case C.GET_CHAT_INFO:
		state = {chatInfo: action.messages}
		return state
		
		default:
		return state
	}
}