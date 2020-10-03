import React, { Component }  from 'react';
import Axios  from 'axios';

class Login extends Component {

	constructor(props) {

		super();

		this.state = {
			email: null,
			password: null,
			remember_me: null			
		}
	}

	componentDidMount() {
	}

	handleSubmit(event) {
		event.preventDefault();

		axios.post('/api/login', {
			email: event.target.email.value,
			password: event.target.password.value,
			remember_me: 1
		})
		.then(function (response) {
			sessionStorage.setItem('token', response.data.token);
			sessionStorage.setItem('token_expires', response.data.expires_at);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<span>E-mail:</span>
					<input type="text" name="email" />
				</label>
				<label>
					<span>Password:</span>
					<input type="text" name="password" />
				</label>
				<label>
					<span>Remember me:</span>
					<input type="checkbox" name="remember_me" />
				</label>
				<button type="submit">Submit</button>	
			</form>
			
			);
	}
}

export default Login;