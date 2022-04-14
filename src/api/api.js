import * as axios from 'axios';

let token = sessionStorage.getItem('avia-app-user')

const instance = axios.create({
    headers: {'Authorization':`Bearer ${token}`},
    baseURL: 'https://avia-app.herokuapp.com/'
})

export const authAPI = {
    login(email, password) {
        return instance.post(`Auth/login`, {email, password})
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    register(email, password) {
        return instance.post(`Auth/register`, {email, password})
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
    }
}