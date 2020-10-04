import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import Navigation from './Navigation';


class App extends Component {

	constructor(props) {

		super(props);

		this.state = {
		}
	}

	componentDidMount() {
		
	}

	authRequest() {
		console.log('auth: ' + Date.now())
		if (this.checkToken()) {
			axios.get('/api/current',{
				headers: {'Authorization' : 'Bearer ' + sessionStorage.getItem('token')}
			})
			.then((response) => {
				this.props.onGetAuth(response.data);
				
			})
			.catch((error) => {
				console.log(error);
			})
		}
		console.log('test');
		console.log(this.props.is_auth);

	}

	checkToken() {
		return sessionStorage.getItem('token') && Date.parse(sessionStorage.getItem('token_expires')) > Date.now();
	}



	render() {

		if (this.props.is_auth == false) this.authRequest();

		return ( 
			<div>
			<Navigation /> 
			<Main /> 
			</div> 
		);
	}
}

const mergeProps = (stateProps, dispatchProps) => {
    const { play } = stateProps;
    const { dispatch } = dispatchProps;

    const toggle = () => {
        dispatch(togglePlay());
        if (play != true) {
            this.playAction();
        } else {
            this.stopAction();
        }
    };

    return {
        play: play,
        togglePlay: () => {
            toggle();
        }
    };
};

export default connect(
	state => ({
		is_auth: state.is_auth
	}),
	dispatch => ({ 
		onGetAuth : (auth) => {
			dispatch({ type: 'GET_AUTH', payload: auth })
		}
	})
)(App);