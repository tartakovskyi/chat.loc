import React, { useState, useEffect }  from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAuthAction, logoutAction } from '../store/actions'
import { getAuthData, checkToken } from '../api'
import Navigation from './common/Navigation'
import Chat from './chat/Chat'
import Chats from './chats/Chats'
import Login from './auth/Login'
import Register from './auth/Register'


const App = ({isAuthData, getAuthAction, logoutAction}) => {

	const [isLogged, setIsLogged] = useState(Boolean(checkToken()))

	useEffect(() => {
		if (isAuthData !== true) {
			if (checkToken()) {
				getAuthData().then((response) => {
					getAuthAction(response.data)
				})
			}
		}
    }, [isAuthData, isLogged])

	const logout = () => {
       localStorage.removeItem('token')
       localStorage.removeItem('token_expires')
       logoutAction()
    }

	return ( 
		<div>
			<Navigation logout={logout} /> 
			<main>
				<Route path='/login' render={(props) => <Login {...props} setIsLogged={setIsLogged} />} />
				<Route path='/register' component={Register}/>
				{!checkToken() && <Redirect to='/login' />}
				<Route exact path='/' component={Chats}/>
				<Route path='/chat/:id' component={Chat}/>
			</main> 
		</div> 
	)
}


const mapStateToProps = function({user}) {

	return {
		isAuthData: user.isAuthData
	}
}


export default connect(mapStateToProps, {getAuthAction, logoutAction})(App)