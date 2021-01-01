import axios from "axios"


export const getAuthData = () => {
    return axios.get('/api/current',{
        headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
    })
    .catch((error) => {
        console.log(error)
    })
}


export const checkToken = () => {
    return localStorage.getItem('token') && Date.parse(localStorage.getItem('token_expires')) > Date.now()
}