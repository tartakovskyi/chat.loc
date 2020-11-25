import React, { Component, createContext }  from 'react';
import Main from './Main';
import Navigation from './Navigation';

export const AppContext = React.createContext();

class App extends Component {

	constructor(props) {

		super(props);

		this.state ={}
	}

	/*getCurrentUser() {
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
	}*/


	componentDidMount() {
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


	render() {
		const loggedUser = this.state.loggedUser ? this.state.loggedUser : 0;
		return ( 
			<AppContext.Provider value={{loggedUser : loggedUser}}>
				<div> 
					<Navigation /> 
					<Main /> 
				</div>
			</AppContext.Provider>
		);
	}
}

export default App ;