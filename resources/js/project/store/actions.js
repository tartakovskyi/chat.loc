import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, GET_AUTH }  from './constants';

export function login(payload) {
  // TODO
  return {
    type: LOGIN_REQUEST
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function getAuth(payload) {
  return {
    type: GET_AUTH
  }
}