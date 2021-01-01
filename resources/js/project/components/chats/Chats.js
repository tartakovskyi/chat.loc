import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Axios  from 'axios'
import EditBtn from '../common/EditBtn'


const Chats = ({auth, isAuthData}) => {

	const [chats, setChats] = useState([]);

	useEffect(() => {
        axios.get('/api/chat')
		.then((response) => {
			setChats(response.data)
		})
		.catch( (error) => {
			console.log(error);
		})
    }, []);


	const unread = (count, id) => {
		if (count) {
			return (
				<Link to={'/chat/' + id}>{count}</Link>
			)
		} else {
			return('0')
		}

	}

	const renderChats = () => {
		return chats.map((chat, index) => {
			return (
				<tr key={index}>
					<td>
						<Link to={'/chat/' + chat.id}>{chat.title}</Link>
					</td>
					<td className="text-center">
						{unread(chat.messages_count, chat.id)}
					</td>
					<td>
						{auth && chat.user_id == auth.id && <EditBtn url={'/chat/' + chat.id + '/edit'} />}
					</td>
				</tr>   
			)
		})
	}

	return (
		<div className="container">
			<h1>All Chats</h1>
			<table className="table table-striped table-borderless">
				<thead>
					<tr>
						<th>Chat</th>
						<th className="text-center">New Messages</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ renderChats() }
				</tbody>
			</table>
		</div>
	);
}

const mapStateToProps = function({user}) {

	return {
		auth: user.auth,
		isAuthData: user.isAuthData
	}
}

export default connect(mapStateToProps)(Chats);