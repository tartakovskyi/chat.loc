import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//import store from './store/store';
import App from './App';

class index extends Component {

	constructor() {

		super();

		this.state = {
		}

	}

	componentDidMount() {}

}

const store = configureStore();

export default index;


if (document.getElementById('app')) {
	ReactDOM.render (( 
		<BrowserRouter> 
			<Provider store={store}>
				<App />
			</Provider> 
		</BrowserRouter> 
	), document.getElementById ('app'));
}