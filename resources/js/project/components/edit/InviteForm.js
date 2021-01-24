import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { searchUser } from '../../api'
import setFormObject from "../common/FormUtils"
import SearchResult from "./SearchResult"


const initialData = {
	user_id: '',
    searchTerm: ''
}


const InviteForm = ({ chatId }) => {

	const [data, setData] = useState(initialData)
	const [errors, setErrors] = useState({})
	const [userChosen, setUserChosen] = useState(false)
	const [searchResult, setSearchResult] = useState([])

	useEffect(() => {
		if(data.searchTerm) {
			searchUser(data.searchTerm)
			.then(response => {
				if (response.data.status === 'ok') {
					setSearchResult(response.data.users)
				}
			})
			.catch(error => console.log(error))
		} else {
			setSearchResult([])
		}
	}, [data.searchTerm])

	const addParticipant = e => {}

	const validate = (data) => {
        const errors = {}

        if (!data.user_id) errors.user_id = "User isn't chosen"

        return errors
    }

	return (
		<div className="invite-form">
			<h2 className="mb-3">Add New Participants</h2>
			<form onSubmit={addParticipant}>
				{!userChosen && (
					<div className="form-group position-relative">
						<input 
						type="text"
						className="form-control"
						autocomplete="off"
						name="searchTerm"
						value={data.searchTerm} 
						onChange={setFormObject(data, setData)}
						/>
						{searchResult.length > 0 && <SearchResult users={searchResult} />}
					</div>
				)}
				<input 
				type="hidden"
				name="user_id"
				value={data.user_id}
				/>
				<button type="submit" className="btn btn-block btn-primary" >Add user to the participants</button>				
			</form>			
		</div>
	)
}



export default InviteForm