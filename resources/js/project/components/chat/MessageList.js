import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getMessagesAction } from '../../store/actions/chatAction'
import Message from './Message'


const MessageList = ({chat_id, messages, getMessagesAction}) => {

	const [lastMessage, setLastMessage] = useState(null)

	return (
		<div className="mb-5">
			{messages.map((message, index) => {
				if (index = messages.length - 1) setLastMessage(message.id);
				return <Message  key={message.id} message={message} className="message rounded mb-4 p-4" />
			})}
		</div>
	)
}


MessageList.propTypes = {
	chat_id: PropTypes.number,
	messages: PropTypes.array
}


const mapStateToProps = ({messages}) => {

	return {
		messages: messages.list
	}
}

export default connect(mapStateToProps)(MessageList)
