import * as axios from 'axios';

const defaultOptions = {
    baseURL: 'https://avia-app.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    },
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
    let user = JSON.parse(localStorage.getItem('avia-app-user'));
    let token = user !== null ? user.token : null;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const authAPI = {
    login(email, password) {
        return instance.post(`Auth/login`, { email, password })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    register(email, password) {
        return instance.post(`Auth/register`, { email, password })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    getRoles() {
        return instance.get(`User/roles`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    }
}

export const locationAPI = {
    getCounties() {
        return instance.get(`Country/list`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    getCities(countryId) {
        return instance.get(`City/list/${countryId}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    deleteCity(cityId) {
        return instance.delete(`City/${cityId}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    addCity(countryId, cityName) {
        return instance.post(`City/`, { countryId, cityName })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    updateCity(cityId, updatedCityName) {
        return instance.put(`City/`, { cityId, updatedCityName })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    addCountry(countryName) {
        return instance.post(`Country?countryName=${countryName}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    deleteCountry(countryId) {
        return instance.delete(`Country/${countryId}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    updateCountry(id, name) {
        return instance.put(`Country`, { id, name })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    getAirports(cityId) {
        return instance.get(`Airport/list/${cityId}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    addAirport(cityId, airportName) {
        return instance.post(`Airport/`, { cityId, airportName })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    deleteAirport(airportId) {
        return instance.delete(`Airport/${airportId}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
    updateAirport(airportId, updatedAirportName) {
        return instance.put(`Airport/`, { airportId, updatedAirportName })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
}