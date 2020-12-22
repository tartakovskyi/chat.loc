import React, { useState }  from 'react';
import { Redirect } from 'react-router-dom';
import Axios  from 'axios';



const Login = (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [remember_me, setRememberMe] = useState(1)
	const [doRedirect, setDoRedirect] = useState(false)


	const handleSubmit = e => {
		e.preventDefault();

		axios.post('/api/login', {
			email: email,
			password: password,
			remember_me: 1
		})
		.then(function (response) {
			sessionStorage.setItem('token', response.data.token);
			sessionStorage.setItem('token_expires', response.data.expires_at);
			setDoRedirect(true);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	const handleChange = e => {
		
        const {name, value} = e.target
        console.log(name)

        switch (name) {
        	case 'email': setEmail(value); break;
        	case 'password': setPassword(value); break;
        	case 'remember_me': setRememberMe(value); break;
        }
    }

	return (

		<div className="container">

			{doRedirect && <Redirect to='/' />}

			<form onSubmit={handleSubmit}>
				<label>
					<span>E-mail:</span>
					<input 
						type="text"
						name="email"
						value={email} 
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type="text"
						name="password"
						value={password}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Remember me:</span>
					<input
						type="checkbox"
						name="remember_me"
						value={remember_me}
						onChange={handleChange}
						/>
				</label>
				<button type="submit">Submit</button>	
			</form>
		</div>
	);
}

export default Login;