import React from 'react'
import { connect } from 'react-redux'


const SearchResult = ({ users, chooseUser, participants }) => {

	const filteredUsers = users.filter(user => {
		participants.findIndex(
			participant => {
				participant.user_id == user.id
			}
		) == -1
	})

	const onUserClick = user => {
		chooseUser(user)
	}
		
	return (
		<div className="search-result position-absolute d-flex flex-column">
			<ul>
				{filteredUsers.map(user => 
					(<li key={user.id} onClick={() => onUserClick(user)}>{user.name}</li>)
				)}
			</ul>
		</div>
	)
}


const mapStateToProps = ({chat}) => {
	return {
		participants : chat.participants
	}
}

export default connect(mapStateToProps)(SearchResult)
