import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import Navigation from './Navigation';


class App extends Component {

	constructor(props) {

		super(props);

		this.state = {
		}
	}

	componentDidMount() {
		
	}

	authRequest() {
		console.log('auth: ' + Date.now())
		if (this.checkToken()) {
			axios.get('/api/current',{
				headers: {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
			})
			.then((response) => {
				this.props.onGetAuth(response.data);
				
			})
			.catch((error) => {
				console.log(error);
			})
		}

	}

	checkToken() {
		return sessionStorage.getItem('token') && Date.parse(sessionStorage.getItem('token_expires')) > Date.now();
	}



	render() {

		if (this.props.is_auth == false) this.authRequest();

		return ( 
			<div>
			<Navigation /> 
			<Main /> 
			</div> 
		);
	}
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAuth : (auth) => {
			dispatch({ type: 'GET_AUTH', payload: auth })
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);