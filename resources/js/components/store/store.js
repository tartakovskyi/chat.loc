import { createStore } from 'redux';

const store = createStore(reducer);

function reducer(state = {is_auth : false}, action) {
  if (action.type === 'GET_AUTH') {
    state.auth = action.payload;
    state.is_auth = true;
  }
  return state;
}



export default store;

store.subscribe(() => console.info(store.getState())) // Для отладки :D