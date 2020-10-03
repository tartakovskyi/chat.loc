import LOGIN from '../actions/login';
import initialState from '../initialState';

export default function login(state = initialState.login, action) {
    switch(action.type) {
        case login: return action.login;
        
        default: return state;
    }
}