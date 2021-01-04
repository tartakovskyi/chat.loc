import C from '../constants'


export const getChatInfo = (chat_id) => {

	return function(dispatch) {

		return axios.get('/api/chat/' + chat_id )
		.then(response => {
			dispatch({
				type: C.GET_CHAT_INFO,
				messages: response.data.chat
			})
		})
		.catch(err => {
			throw err
		})
	}
}

export const getMessages = (chat_id) => {

	return function(dispatch) {

		return axios.get('/api/chat/' + chat_id + '/message')
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
