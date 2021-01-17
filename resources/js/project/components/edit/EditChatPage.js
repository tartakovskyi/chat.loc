import React from 'react'
import ChatForm from "./ChatForm"
import ParticipantList from "./ParticipantList"


const EditChatPage = ({match}) => {

	const id = match.params.id !== "undefined" ? match.params.id : null

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h1 className="text-center">{ id ? 'Edit Chat' : 'Add New Chat' }</h1>
					<ChatForm id={id} />
					{ id && <ParticipantList id={id} /> }
				</div>
			</div>
		</div>
	)
}


export default EditChatPage