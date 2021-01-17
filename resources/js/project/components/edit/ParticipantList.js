import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { getChatInfoAction } from '../../store/actions/chatAction'
//import PropTypes from 'prop-types'
//import setFormObject from "../common/FormUtils"
import ChatForm from "./ChatForm"


const ParticipantList = ({match}) => {

	const id = match.params.id !== "undefined" ? match.params.id : null

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h1 className="text-center">{id ? 'Edit Chat' : 'Add New Chat'}</h1>
					<ChatForm id={id} />
					<h2>Add/Delete Participants</h2>
					
				</div>
			</div>
		</div>
	)
}


export default ParticipantList