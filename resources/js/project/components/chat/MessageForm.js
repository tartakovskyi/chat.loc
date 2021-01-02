import React from 'react'
import PropTypes from 'prop-types'


const MessageForm = (props) => {


	return (
		<div className="message rounded mb-4 p-4">
			<div className="d-flex justify-content-between mb-3">
				<b>{message.user.name}</b>
				<b>{convertDate(message.created_at)}</b>
			</div>
			<p>{message.text}</p>
		</div> 
	)
}





export default MessageForm
