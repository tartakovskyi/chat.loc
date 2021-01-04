import C from '../constants'


export const getMessages = (chat_id) => {

	return function(dispatch) {

		return axios.get('/api/chat/' + chat_id)
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
