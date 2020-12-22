import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';



const store = configureStore();


if (document.getElementById('app')) {
	ReactDOM.render (( 
		<Router> 
			<Provider store={store}>
				<App />
			</Provider> 
		</Router> 
	), document.getElementById ('app'));
}