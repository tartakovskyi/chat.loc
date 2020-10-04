import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Axios  from 'axios';
import EditBtn from './EditBtn';


class Chat extends Component {

	constructor(props) {

		super();

		this.state = {
			id: props.match.params.id,
			chat: {},
			messages: []
		}
	}

	componentDidMount() {
		axios.get('/api/chat/' + this.state.id)
		.then((response) => {
			this.setState({ chat : response.data.chat });
			this.setState({ messages : response.data.messages });
		})
		.catch((error) => {
			console.log(error);
		})

		
	}

	convertDate(date) {
		const newDate = Date.parse(date);

		return new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "numeric", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}).format(newDate);
	}

	renderMessages() {
		return this.state.messages.map((message) => {
			return (
				<div key={message.id} className="message rounded mb-4 p-4">
					<div className="d-flex justify-content-between mb-3">
						<b>{message.user.name}</b>
						<b>{this.convertDate(message.created_at)}</b>
					</div>
					<p>{message.text}</p>
				</div>   
				);
		});
	}

	render() {
		console.log(this.props);
		return (

			<div className="container">
				<h1>{this.state.chat.title}</h1>
				{this.renderMessages()}	
			</div>
			);
	}
}


export default connect(
	state => ({
		auth: state.auth,
		is_auth: state.is_auth
	}),
	dispatch => ({ 
	})
	)(Chat);