import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getChatInfoAction } from '../../store/actions/chatAction'
import PropTypes from 'prop-types'
import setFormObject from "../common/FormUtils"
import ChatForm from "./ChatForm"


const EditChatPage = ({match}) => {

	const id = match ? match.params.id : null

	useEffect(() => {
        if (id) getChatInfoAction(id)
    }, [id])


	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h1 className="text-center">{id ? 'Edit Chat' : 'Add New Chat'}</h1>
					<ChatForm id={id} />
				</div>
			</div>
		</div>
	)
}


export default connect(null, {getChatInfoAction})(EditChatPage)
