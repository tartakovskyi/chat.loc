import C from '../constants';

const initialState = {list: [], lastMessage: null, newMessages: false};

export default function messages (state = initialState, action) {
	switch (action.type) {

		case C.GET_MESSAGES:
		const list = [...state.list, ...action.messages]
		const newMessages = Object.keys(action.messages).length ? true : false
		return {
			...state,
			list,
			newMessages
		}
		
		default:
		return state
	}
}