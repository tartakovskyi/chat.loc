import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import Chat from './Chat';
import Chats from './Chats';
import Login from './Login';


const Main = () => {

	return (
		<main>
			<Route path='/login' component={Login}/>
			{!sessionStorage.getItem('token') && <Redirect to='/login' />}
			<Route exact path='/' component={Chats}/>
			<Route path='/chat/:id' component={Chat}/>
		</main>
	);
}

export default Main;