import C from '../constants'


export const deleteFromChatAction = (participant_id, chat_id) => {

	return function(dispatch) {

		return axios.delete(`/api/participant/` + participant_id)
		.then(response => {
			if (response.data.status === 'ok') {
				getParticipantsAction(participant_id)
			}
		})
		.catch(err => {
			throw err
		})
	}
}

export const getChatInfoAction = chat_id => {

	return function(dispatch) {

		return axios.get('/api/chat/' + chat_id )
		.then(response => {
			dispatch({
				type: C.GET_CHAT_INFO,
				chatInfo: response.data.chat,
				participants: response.data.participants
			})
		})
		.catch(err => {
			throw err
		})
	}
}

export const getMessagesAction = (chat_id, last_message = null) => {

	return function(dispatch) {

		return axios.get('/api/chat/' + chat_id + '/message', {
			params: {
				last_message: last_message
			}
		})
		.then(response => {
			dispatch({
				type: C.GET_MESSAGES,
				messages: response.data.messages
			})
		})
		.catch(err => {
			throw err
		})
	}
}

export const getParticipantsAction = chat_id => {

	return function(dispatch) {

		return axios.get(`/api/participant/${chat_id}/participant`)
		.then(response => {
			dispatch({
				type: C.GET_PARTICIPANTS,
				participants: response.data.participants
			})
		})
		.catch(err => {
			throw err
		})
	}
}

