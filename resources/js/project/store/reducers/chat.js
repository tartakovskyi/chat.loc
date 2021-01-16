import C from '../constants';

const initialState = {
	chatInfo: null,
	participants: null
};

export default function chat (state = initialState, action) {
	switch (action.type) {

		case C.GET_CHAT_INFO:
		state = {
			chatInfo: action.chatInfo,
			participants: action.participants
		}
		return state
		
		default:
		return state
	}
}