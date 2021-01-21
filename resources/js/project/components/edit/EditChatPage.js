import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Axios  from 'axios'
import { getChatInfoAction } from '../../store/actions/chatAction'
import ChatForm from "./ChatForm"
import ParticipantList from "./ParticipantList"


const EditChatPage = ({ match, chatInfo, getChatInfoAction }) => {

	const id = match.params.id !== "undefined" ? Number(match.params.id) : null

	useEffect(() => {
        if (id) {
        	getChatInfoAction(id)
        }
    }, [id])	

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h1 className="text-center">{ id ? 'Edit Chat' : 'Add New Chat' }</h1>
					<ChatForm id={id} chatInfo={chatInfo} />
					{ id && <ParticipantList id={id} /> }
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({chat}) => {
	return {
		participants : chat.participants
	}
}

export default  connect(mapStateToProps, { getChatInfoAction })(EditChatPage)