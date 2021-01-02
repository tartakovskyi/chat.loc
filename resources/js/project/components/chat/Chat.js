import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux'
import Axios  from 'axios'
import Message from './Message'


const Chat = ({match}) => {

	const id = match.params.id
	const [chatData, setChatData] = useState({})
	const [messages, setMessages] = useState([])

	useEffect(() => {
		axios.get('/api/chat/' + id)
		.then((response) => {
			setChatData(response.data.chat)
			setMessages(response.data.messages)
		})
		.catch((error) => {
			console.log(error)
		})
    }, [])


	const convertDate = (date) => {
		const newDate = Date.parse(date)

		return new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "numeric", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}).format(newDate)
	}


	return (
		<div className="container">
			<h1>{chatData.title}</h1>
			{messages.map(message => (
				<Message  key={message.id} message={message} className="message rounded mb-4 p-4" /> 
			))}
		</div>
	)
}


const mapStateToProps = ({user}) => {
	return {
		auth: user.auth,
		is_auth: user.is_auth
	}
}

export default connect(mapStateToProps)(Chat)
