import React, { useState }  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Message from './Message'


const MessageList = ({messages}) => {

	return (
		<div className="mb-5">
			{messages && messages.map(message => (
				<Message  key={message.id} message={message} className="message rounded mb-4 p-4" /> 
			))}
		</div>
	)
}


MessageList.propTypes = {
	messages: PropTypes.array
}


const mapStateToProps = ({messages}) => {

	return {
		messages: messages.list
	}
}

export default connect(mapStateToProps)(MessageList)
