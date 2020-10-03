import LOGIN from '../actions/login';

function login(value) {
	return {
		type: LOGIN,
		value_1: value
	};
}

export default login;