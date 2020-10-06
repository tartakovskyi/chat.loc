import { createStore } from 'redux';

const store = createStore(reducer);

//let initialState = {is_auth : false};

function reducer(state = {is_auth : false, auth: null}, action) {
  if (action.type === 'GET_AUTH') {
    return {
       auth: action.payload,
       is_auth: true
    }
  }
  return state;
}


export default store;

store.subscribe(() => console.info(store.getState())) // Для отладки :D