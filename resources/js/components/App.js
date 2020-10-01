import React, { Component }  from 'react';
import Main from './Main';
import Navigation from './Navigation';


class App extends Component {

	constructor(props) {

		super();

		this.state = {
		}
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
			<div> 
			<Navigation /> 
			<Main /> 
			</div> 
			);
		}
	}

	export default App ;