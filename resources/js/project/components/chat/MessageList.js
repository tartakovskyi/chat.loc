import React, { useState }  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Message from './Message'


const MessageList = ({messages}) => {

	return (
		<>
		{messages && messages.map(message => (
			<Message  key={message.id} message={message} className="message rounded mb-4 p-4" /> 
		))}
		</>
	)
}


MessageList.propTypes = {
	messages: PropTypes.array
}


const mapStateToProps = ({message}) => {

	return {
		messages: message.list
	}
}

export default connect(mapStateToProps)(MessageList)
