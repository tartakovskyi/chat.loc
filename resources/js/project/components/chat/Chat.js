import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux'
import { getMessages } from '../../store/actions/chatAction'
import MessageList from './MessageList'
import MessageForm from './MessageForm'


const Chat = ({match, auth, isAuthData, getMessages}) => {

	const id = Number(match.params.id)
	/*const [chatData, setChatData] = useState({})*/

	useEffect(() => {
		/*axios.get('/api/chat/' + id)
		.then((response) => {
			setChatData(response.data.chat)
			setMessages(response.data.messages)
		})
		.catch((error) => {
			console.log(error)
		})*/
		getMessages(id)
    }, [])

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<h1>{/*{chatData.title}*/}</h1>
					<MessageList />
					{isAuthData && <MessageForm chat_id={id} user_id={auth.id} />}
				</div>
			</div>
		</div>
	)
}


const mapStateToProps = ({user}) => {
	return {...user}
}

export default connect(mapStateToProps, {getMessages})(Chat)
