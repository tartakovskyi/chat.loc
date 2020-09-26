import React, { Component }  from 'react';
import Navigation from './Navigation';
import ReactDOM from 'react-dom';

class Main extends Component {

	constructor() {

		super();

		this.state = {
			chats: [],
			currentChat: null
		}
	}
	componentDidMount() {
		fetch('/api/chats')
		.then(response => {
			return response.json();
		})
		.then(chats => {
            //Fetched product is stored in the state
            this.setState({ chats });
        });

	}

	renderChats() {
		return this.state.chats.map(product => {
			return (
				<li>{ product.title }</li>      
				);
		});
	}

	render() {
		return (
			< Navigation />
			<main>
			<h1>All Chats</h1>
			<ul>
			{ this.renderChats() }
			</ul>
			</main>
			);
	}
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('app')) {
	ReactDOM.render(<Main />, document.getElementById('app'));
}