import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getMessagesAction, getChatInfoAction } from '../../store/actions/chatAction'
import MessageList from './MessageList'
import MessageForm from './MessageForm'


const Chat = ({match, auth, isAuthData, chatInfo, getMessagesAction, getChatInfoAction}) => {

	const id = Number(match.params.id)

	useEffect(() => {
		getChatInfoAction(id)
		getMessagesAction(id)
		setInterval(() => getMessagesAction(id), 2500)
    }, [])


	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<h1>{chatInfo && chatInfo.title}</h1>
					<MessageList chat_id={id} />
					{isAuthData && <MessageForm chat_id={id} user_id={auth.id} />}
				</div>
			</div>
		</div>
	)
}

Chat.propTypes = {
	auth: PropTypes.object,
	isAuthData: PropTypes.bool,
	chatInfo: PropTypes.object
}

const mapStateToProps = ({user, chat}) => {
	return {...user, ...chat}
}

export default connect(mapStateToProps, {getMessagesAction, getChatInfoAction})(Chat)
