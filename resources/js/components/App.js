import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import Navigation from './Navigation';


class App extends Component {

	constructor(props) {

		super(props);
	}

	componentDidMount() {
		
	}

	authRequest() {
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


const mapStateToProps = function(state) {
	return {
		is_auth: state.is_auth
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onGetAuth: (auth) => dispatch({ type: 'GET_AUTH', payload: auth })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);