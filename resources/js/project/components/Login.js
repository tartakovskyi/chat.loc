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

        switch (name) {
        	case 'email': setEmail(value); break;
        	case 'password': setPassword(value); break;
        	case 'remember_me': setRememberMe(value);
        }
    }

	return (

		<div className="container">

			{doRedirect && <Redirect to='/' />}

			<div className="row justify-content-center">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<h1 className="text-center">Sign In</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="email">E-mail:</label>
							<input 
								type="text"
								className="form-control"
								id="email"
								name="email"
								value={email} 
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								value={password}
								onChange={handleChange}
							/>
						</div>
						<div className="form-check mb-4">
							<input
								type="checkbox"
								className="form-check-input"
								id="remember_me"
								name="remember_me"
								value={remember_me}
								onChange={handleChange}
							/>
							<label 
								htmlFor="remember_me" 
								className="form-check-label">
								Remember me
							</label>
						</div>
						<button type="submit" className="btn btn-block btn-primary">Submit</button>	
					</form>
			</div>
			</div>
		</div>
	);
}

export default Login;