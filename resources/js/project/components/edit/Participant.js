import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Participant = ({name, id, deleteParticipant}) => {


	return (
		<button className="participant btn btn-primary btn-sm" onClick={() => deleteParticipant(id)} id={id} >
			{name}
			<svg><use xlinkHref="/storage/img/icons.svg#close"></use></svg>
		</button>
	)
}

export default Participant