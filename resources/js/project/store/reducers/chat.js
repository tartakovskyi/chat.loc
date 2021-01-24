import C from '../constants';

const initialState = {
	chatInfo: null,
	participants: null
};

export default function chat (state = initialState, action) {
	switch (action.type) {

		case C.GET_CHAT_INFO:
		newState = {
			chatInfo: action.chatInfo,
			participants: action.participants
		}
		return newState

		case C.GET_PARTICIPANTS:
		return {
			...state,
			participants: action.participants
		}
		
		default:
		return state
	}
}