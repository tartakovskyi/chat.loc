import React from 'react'


const SearchResult = ({ users, setChosenUser }) => {

	const onUserClick = user => {
		setChosenUser(user)
	}
		
	return (
		<div className="search-result position-absolute d-flex flex-column">
			<ul>
				{users.map(user => 
					(<li key={user.id} onClick={() => onUserClick(user)}>{user.name}</li>)
				)}
			</ul>
		</div>
	)
}


export default  SearchResult