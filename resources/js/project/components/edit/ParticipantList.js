import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Participant from "./Participant"


const ParticipantList = ({participants, id}) => {

	return (
		<div className="participants">
			{ participants && participants.length ? 
			participants.map(participant => (<Participant name={participant.name} key={participant.id} / >)) : 
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

export default connect(mapStateToProps)(ParticipantList)