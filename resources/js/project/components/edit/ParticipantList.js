import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ParticipantList from "./ParticipantList"


const ParticipantList = ({participants, id}) => {

	return (
		<div className="participants">
			<ul>
				{ participants.map(participant => <Participant name={participant.name} key={participant.id} / > }	
			</ul>
		</div>
	)
}


ParticipantList.propTypes = {
	participants: PropTypes.array
}

const mapStateToProps = ({chat}) => {
	return {
		participants : chat.participants
	}
}

export default connect(mapStateToProps)(ParticipantList)