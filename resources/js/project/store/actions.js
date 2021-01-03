import C from './constants';


export const getAuthAction = auth => ({
     type: C.GET_AUTH,
     payload: auth
})

export const logoutAction = () => ({
    type: C.LOGOUT_SUCCESS
})

/*export const getMessages = messages => ({
     type: C.GET_MESSAGES,
     messages: messages
})*/


export function getMessages(chat_id) {
	return function(dispatch) {

		return axios.get('/api/chat/' + chat_id).then(response => {
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
   
