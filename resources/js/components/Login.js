import React, { Component }  from 'react';
import Axios  from 'axios';

class Login extends Component {

	constructor(props) {

		super();

		this.state = {
			
		}
	}

	componentDidMount() {
	}

	handleSubmit(event) {
		event.preventDefault();

		axios.post('/api/login', {
			firstName: 'Fred',
			lastName: 'Flintstone'
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<span>Login:</span>
					<input type="text" value={this.state.value} name="login" />
				</label>
				<label>
					<span>Password:</span>
					<input type="text" value="" name="password" />
				</label>
				<label>
					<span>Remember me:</span>
					<input type="text" value={this.state.value} name="remember_me" />
				</label>
			</form>
			
			);
	}
}

export default Chat;