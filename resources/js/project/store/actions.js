import C from './constants';


export const getAuthAction = auth => ({
     type: C.GET_AUTH,
     payload: auth
})

export const logoutAction = () => ({
    type: C.LOGOUT_SUCCESS
})