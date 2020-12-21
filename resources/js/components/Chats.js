import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Axios  from 'axios';
import EditBtn from './EditBtn';


class Chats extends Component {

	constructor(props) {

		super(props);

		this.state = {
			chats: []
		}
	}

	componentDidMount() {
		axios.get('/api/chat')
		.then((response) => {
			this.setState({ chats : response.data })
		})
		.catch( (error) => {
			console.log(error);
		})
	}

	unread (count, id) {
		if (count) {
			return (
				<a href={'/chat/' + id}>{count}</a>
				);
		} else {
			return('0');
		}

	}

	editBtn(chat) {
		if (this.props.auth && chat.user_id == this.props.auth.id) {

			return (
				<EditBtn url={'/chat/' + chat.id + '/edit'} />
			);
		}
	}

	renderChats() {
		return this.state.chats.map((chat, index) => {
			return (
				<tr key={index}>
					<td>
						<a href={'/chat/' + chat.id}>{chat.title}</a>
					</td>
					<td className="text-center">
						{this.unread(chat.messages_count, chat.id)}
					</td>
					<td>
						{this.editBtn(chat)}
					</td>
				</tr>   
				);
		});
	}

	render() {
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
						{ this.renderChats() }
					</tbody>
				</table>
			</div>
			);
	}
}

const mapStateToProps = function({user}) {
	console.log('mapStateToProps')
	console.log(user)

	return {
		auth: user.auth,
		is_auth: user.is_auth
	}
}

export default connect(mapStateToProps)(Chats);