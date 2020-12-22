import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import Axios  from 'axios';
import EditBtn from './EditBtn';


const Chats = (props) => {

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
				<a href={'/chat/' + id}>{count}</a>
				);
		} else {
			return('0');
		}

	}

	const renderChats = () => {
		return chats.map((chat, index) => {
			return (
				<tr key={index}>
					<td>
						<a href={'/chat/' + chat.id}>{chat.title}</a>
					</td>
					<td className="text-center">
						{unread(chat.messages_count, chat.id)}
					</td>
					<td>
						{props.auth && chat.user_id == props.auth.id && <EditBtn url={'/chat/' + chat.id + '/edit'} />}
					</td>
				</tr>   
			);
		});
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
		is_auth: user.is_auth
	}
}

export default connect(mapStateToProps)(Chats);