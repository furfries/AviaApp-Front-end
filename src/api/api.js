import * as axios from 'axios';

let token = 'admin'

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
    },
    register(email, password) {
        return instance.post(`Auth/register`, {email, password})
        .then(response => {
            return response
        })
    }
}