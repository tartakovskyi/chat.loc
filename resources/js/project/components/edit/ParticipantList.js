import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteFromChatAction } from '../../store/actions/chatAction'
import Participant from "./Participant"


const ParticipantList = ({participants, id, deleteFromChatAction }) => {

	const deleteParticipant = participantId => {
		deleteFromChatAction(participantId, id)
	}

	return (
		<div className="participants">
			<h2 className="mb-3">Participants</h2>
			{ participants && participants.length
			? 
			(<div className="d-flex flex-wrap">
				{ participants.map(participant => (<Participant name={participant.user.name} key={participant.id} id={participant.id} deleteParticipant={deleteParticipant} / >)) }	
			</div>)
			: 
			(<p>There are no participants in this chat...</p>) }
		</div>
	)
}


ParticipantList.propTypes = {
	participants: PropTypes.array,
	id: PropTypes.number
}

const mapStateToProps = ({chat}) => {
	return {
		participants : chat.participants
	}
}

export default connect(mapStateToProps, { deleteFromChatAction })(ParticipantList)