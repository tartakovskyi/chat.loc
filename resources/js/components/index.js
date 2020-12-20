import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {createBrowserHistory} from 'history';
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

const browserHistory = createBrowserHistory();

export default index;


if (document.getElementById('app')) {
	ReactDOM.render (( 
		<Router history={browserHistory}> 
			<Provider store={store}>
				<App />
			</Provider> 
		</Router> 
	), document.getElementById ('app'));
}