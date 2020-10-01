import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import Chats from './Chats';


class Main extends Component {

	constructor(props) {

		super();

		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {

		if (sessionStorage.getItem('token')) {
			return (
				<main>
				<Switch>
				<Route path='/chat/:id' component={Chat}/>
				<Route path='/' component={Chats}/>
				</Switch>
				</main>
			);
		} else {
			return (
				<main>
				<Login />
				</main>
			);
		}

	}
}

export default Main;