import React from 'react'


const SearchResult = ({ users }) => {

		

	return (
		<div className="search-result position-absolute d-flex flex-column">
			<ul>
				{users.map(user => 
					(<li key={user.id} onClick={()=>{}}>{user.name}</li>)
				)}
			</ul>
		</div>
	)
}


export default  SearchResult