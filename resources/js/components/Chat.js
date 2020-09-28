import React, { Component }  from 'react';
import Axios  from 'axios';
import EditBtn from './EditBtn';


class Chat extends Component {

	constructor(props) {

		super();

		this.state = {
			id: props.match.params.id
		}
	}

	componentDidMount() {
		axios.get('/api/chat/' + this.state.id)
		.then((response) => {
			this.setState({ chat : response.data });
			console.log(response);
		})
		.catch( (error) => {
			console.log(error);
		})
	}

		render() {
		return (
			<div className="container">
				<h1>Test</h1>
			</div>
			);
	}
}

export default Chat;