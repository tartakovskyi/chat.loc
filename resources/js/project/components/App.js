import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import Navigation from './Navigation';


const App = ({is_auth, onGetAuth}) => {

	useEffect(() => {
        if (is_auth !== true) {
			if (checkToken()) {
				axios.get('/api/current',{
					headers: {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
				})
				.then((response) => {
					onGetAuth(response.data);		
				})
				.catch((error) => {
					console.log(error);
				})
			}
		}
    }, [is_auth]);

	const checkToken =() => {
		return sessionStorage.getItem('token') && Date.parse(sessionStorage.getItem('token_expires')) > Date.now();
	}

	return ( 
		<div>
			<Navigation /> 
			<Main /> 
		</div> 
	);
}


const mapStateToProps = function({user}) {
	return {
		is_auth: user.is_auth
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onGetAuth: (auth) => {
			dispatch({ type: 'GET_AUTH', payload: auth })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);