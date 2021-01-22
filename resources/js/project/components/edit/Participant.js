import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Participant = ({name}) => {

	const handleClick = () => {}

	return (
		<button className="participant btn btn-primary btn-sm" onClick={handleClick}>{name}</button>
	)
}

export default Participant

/*ParticipantList.propTypes = {
	participants: PropTypes.array,
	id: PropTypes.number
}

const mapStateToProps = ({chat}) => {
	return {
		participants : chat.participants
	}
}

export default connect(mapStateToProps)(ParticipantList)*/