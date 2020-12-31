import React, { useState, useEffect }  from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {getAuthAction, logoutAction} from '../store/actions'
import Navigation from './common/Navigation'
import Chat from './chat/Chat'
import Chats from './chats/Chats'
import Login from './auth/Login'
import Register from './auth/Register'


const App = ({is_auth, getAuthAction, logoutAction}) => {

	useEffect(() => {
        if (is_auth !== true) {
			if (checkToken()) {
				axios.get('/api/current',{
					headers: {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
				})
				.then((response) => {
					getAuthAction(response.data)		
				})
				.catch((error) => {
					console.log(error)
				})
			}
		}
    }, [is_auth])

	const checkToken =() => {
		return sessionStorage.getItem('token') && Date.parse(sessionStorage.getItem('token_expires')) > Date.now()
	}

	const logout = () => {
       sessionStorage.removeItem('token')
       sessionStorage.removeItem('token_expires')
       logoutAction()
    }

	return ( 
		<div>
			<Navigation is_auth={is_auth} logout={logout} /> 
			<main>
				<Route path='/login' render={(props) => <Login {...props}/>} />
				<Route path='/register' component={Register}/>
				{!sessionStorage.getItem('token') && <Redirect to='/login' />}
				<Route exact path='/' component={Chats}/>
				<Route path='/chat/:id' component={Chat}/>
			</main> 
		</div> 
	)
}


const mapStateToProps = function({user}) {
	return {
		is_auth: user.is_auth
	}
}


export default connect(mapStateToProps, {getAuthAction, logoutAction})(App)