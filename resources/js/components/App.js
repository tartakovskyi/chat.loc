import React, { Component, createContext }  from 'react';
import Main from './Main';
import Navigation from './Navigation';

export const AppContext = createContext();

class App extends Component {

	constructor(props) {

		super(props);

		this.state = {
			loggedUser: null
		}
	}

	getCurrentUser() {
		axios.get('/api/current',{
			headers: {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
		})
		.then((response) => {
			this.setState({loggedUser: response.data})
			console.log('Запрос')
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		})
	}


	componentDidMount() {
		
	}


	render() {
		if (!this.state.loggedUser) {
			this.getCurrentUser();
		}
		return ( 
			<AppContext.Provider value={this.state}>
				<div> 
					<Navigation /> 
					<Main /> 
				</div>
			</AppContext.Provider>
		);
	}
}

export default App ;