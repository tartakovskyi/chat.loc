import React, { Component }  from 'react';
import Axios  from 'axios';
import EditBtn from './EditBtn';
import { AppContext } from './App';


class Chats extends Component {

	constructor() {

		super();

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
						<EditBtn url={'/chat/' + chat.id + '/edit'} />
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
						<AppContext.Consumer>
							{(props) => {
								console.log('Полученный контекст');
								console.log(this.context);
								this.renderChats()
							}}
						</AppContext.Consumer>
					</tbody>
				</table>
			</div>
		);
	}
}

Chats.contextType = AppContext;

export default Chats;