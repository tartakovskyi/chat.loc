import React, { Component, createContext }  from 'react';
import Main from './Main';
import Navigation from './Navigation';

export const AppContext = createContext();

class App extends Component {

	constructor(props) {

		super();
	}


	componentDidMount() {
		axios.get('/api/current',{
			headers: {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
		})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		})
	}


	render() {
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