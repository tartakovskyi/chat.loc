import axios from "axios"


const token = 'Bearer ' + localStorage.getItem('token')


export const getAuthData = () => {
    return axios.get('/api/current',{
        headers: {'Authorization' : token}
    })
}


export const checkToken = () => {
    return localStorage.getItem('token') && Date.parse(localStorage.getItem('token_expires')) > Date.now()
}