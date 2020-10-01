import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers'
import App from './App';

class index extends Component {

	constructor() {

		super();

		this.state = {
		}
	}

	componentDidMount() {}

}

const store = createStore(todoApp);

export default index;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/

if (document.getElementById('app')) {
	ReactDOM.render (( 
		<BrowserRouter> 
		<Provider store={store}>
			<App />
		</Provider> 
		</BrowserRouter> 
		), document.getElementById ('app'));
}