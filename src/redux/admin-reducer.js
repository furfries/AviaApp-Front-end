import { locationAPI } from "../api/api";

const GET_COUNTRIES = 'GET_COUNTRIES';
const FAILED = 'FAILED';
const GET_CITIES = 'GET_CITIES';
const UPDATE_COUNTRY_NAME = 'UPDATE_COUNTRY_NAME';
const UPDATE_COUNTRY_ID = 'UPDATE_COUNTRY_ID';
const CLEAR_INPUT = 'CLEAR_INPUT';
const UPDATE_CITY_NAME = 'UPDATE_CITY_NAME';
const UPDATE_CITY_ID = 'UPDATE_CITY_ID';
const SET_COUNTRY_ID = 'SET_COUNTRY_ID';
const IS_FETCHING = 'IS_FETCHING';
const GET_FOUND_COUNTRY = 'GET_FOUND_COUNTRY';
const GET_FOUND_CITY = 'GET_FOUND_CITY';
const GET_AIRPORTS = 'GET_AIRPORTS';
const UPDATE_AIRPORT_NAME = 'UPDATE_AIRPORT_NAME';
const UPDATE_AIRPORT_ID = 'UPDATE_AIRPORT_ID';
const SET_CITY_ID = 'SET_CITY_ID';
const GET_FOUND_AIRPORT = 'GET_FOUND_AIRPORT';


let initialState = {
    countries : [],
    country: null,
    cities : [],
    city: null,
    airports: [],
    airport: null,
    errors : [],
    countryName: '',
    countryNameText: '',
    countryIdText: '',
    countryId: '',
    cityName:'',
    cityNameText: '',
    cityId:'',
    cityIdText: '',
    airportName: '',
    airportNameText: '',
    airportId: '',
    airportIdText: '',
    currentCountryId: '',
    currentCityId: '',
    currentAirportId: '',
    isFetching: false,
}

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES : {
            return {
                ...state,
                countries: action.countries
            }
        }
        case GET_CITIES : {
            return {
                ...state,
                cities: action.cities,
            }
        }
        case FAILED : {
            return {
                ...state,
                errors: action.errors
            }
        }
        case UPDATE_COUNTRY_NAME : {
            return {
                ...state,
                countryNameText: action.countryName,

            }
        }
        case UPDATE_COUNTRY_ID : {
            return {
                ...state,
                countryIdText: action.countryId
            }
        }
        case CLEAR_INPUT : {
            return {
                ...state,
                countryNameText: '',
                countryIdText:'',
                cityNameText: '',
                cityIdText: '',
                airportNameText:'',
                airportIdText: '',
            }
        }
        case UPDATE_CITY_NAME : {
            return {
                ...state,
                cityNameText: action.cityName
            }
        }
        case UPDATE_CITY_ID : {
            return {
                ...state,
                cityIdText: action.cityId
            }
        }
        case SET_COUNTRY_ID : {
            return {
                ...state,
                currentCountryId: action.currentCountryId
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case GET_FOUND_COUNTRY: {
            return {
                ...state,
                country: action.country
            }
        }
        case GET_FOUND_CITY: {
            return {
                ...state,
                city: action.city
            }
        }
        case GET_AIRPORTS: {
            return {
                ...state,
                airports: action.airports
            }
        }
        case UPDATE_AIRPORT_NAME: {
            return {
                ...state,
                airportNameText: action.airportName
            }
        }
        case SET_CITY_ID: {
            return {
                ...state, 
                currentCityId: action.currentCityId
            }
        }
        case GET_FOUND_AIRPORT: {
            return {
                ...state,
                airport: action.airport
            }
        }
        case UPDATE_AIRPORT_ID: {
            return {
                ...state,
                airportIdText: action.airportId,
            }
        }
        default : return state
    }

}

export const getCountries = (countries) => ({type: GET_COUNTRIES, countries});
export const failed = (errors) => ({type: FAILED, errors});
export const getCities = (cities) => ({type: GET_CITIES, cities});
export const updateCountryName = (countryName) => ({type: UPDATE_COUNTRY_NAME, countryName});
export const updateCountryId = (countryId) => ({type: UPDATE_COUNTRY_ID, countryId})
export const updateCityName = (cityName) => ({type: UPDATE_CITY_NAME, cityName});
export const updateCityId = (cityId) => ({type: UPDATE_CITY_ID, cityId});
export const clearInput = () => ({type: CLEAR_INPUT});
export const setCountryId = (currentCountryId) => ({type: SET_COUNTRY_ID, currentCountryId});
export const isFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const getFoundCountry = (country) => ({type: GET_FOUND_COUNTRY, country});
export const getFoundCity = (city) => ({type: GET_FOUND_CITY, city});
export const getAirports = (airports) => ({type: GET_AIRPORTS, airports});
export const updateAirportName = (airportName) => ({type: UPDATE_AIRPORT_NAME, airportName});
export const updateAirportId = (airportId) => ({type: UPDATE_AIRPORT_ID, airportId});
export const setCityId = (currentCityId) => ({type: SET_CITY_ID, currentCityId});
export const getFoundAirport = (airport) => ({type: GET_FOUND_AIRPORT, airport})



export const getCountriesThunk = () => (dispatch) => {
    dispatch(isFetching(true))
    locationAPI.getCounties().then(response => {
        switch (response.status){
            case 200: {
                let countries = response.data;
                dispatch(getCountries(countries))
                dispatch(isFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                dispatch(isFetching(false))
                break;
            }
        }
    })
};

export const addCountryThunk = (countryName) => (dispatch) => {
    locationAPI.addCountry(countryName).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getCountriesThunk())
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}

export const deleteCountryThunk = (countryId) => (dispatch) => {
    locationAPI.deleteCountry(countryId).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getCountriesThunk())
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
    }})
}

export const updateCountryThunk = (id, name) => (dispatch) => {
    locationAPI.updateCountry(id, name).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getCountriesThunk())
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
    }})
}

export const searchCountryThunk = (countryId) => (dispatch) => {
    locationAPI.searchCountry(countryId).then(response => {
        switch (response.status) {
            case 200: {
                let country = response.data
                console.log(country)
                dispatch(getFoundCountry(country))
            }
            case 400:
                case 401:
                case 404: {
                    let errors = ['Error']
                    dispatch(failed(errors))
                    break;
            }
        }
    })
}

export const getCitiesThunk = (countryId) => (dispatch) => {
    locationAPI.getCities(countryId).then(response => {
        switch (response.status){
            case 200: {
                let cities = response.data;
                let currentCountryId = countryId.toString()
                dispatch(getCities(cities));
                dispatch(setCountryId(currentCountryId));
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
};

export const addCityThunk = (countryId, cityName) => (dispatch) => {
    locationAPI.addCity(countryId, cityName).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getCitiesThunk(countryId))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
    }})
}
export const deleteCityThunk = (cityId, countryId) => (dispatch) => {
    locationAPI.deleteCity(cityId).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getCitiesThunk(countryId))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const updateCityThunk = (cityId, updatedCityName, countryId) => (dispatch) => {
    locationAPI.updateCity(cityId, updatedCityName).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getCitiesThunk(countryId))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const searchCityThunk = (cityId) => (dispatch) => {
    locationAPI.searchCity(cityId).then(response => {
        switch (response.status) {
            case 200: {
                let city = {id : response.data.id, name: response.data.name};
                dispatch(getFoundCity(city))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const getAirportsThunk = (cityId) => (dispatch) => {
    locationAPI.getAirports(cityId).then(response => {
        switch (response.status) {
            case 200: {
                let airports = response.data;
                let currentCityId = cityId.toString()
                dispatch(getAirports(airports));
                dispatch(setCityId(currentCityId)) ;
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const addAirportThunk = (cityId, airportName) => (dispatch) => {
    locationAPI.addAirport(cityId, airportName).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getAirportsThunk(cityId))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const deleteAirportThunk = (airportId, cityId) => (dispatch) => {
    locationAPI.deleteAirport(airportId).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getAirportsThunk(cityId))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const searchAirportThunk = (airportId) => (dispatch) => {
    locationAPI.searchAirport(airportId).then(response => {
        switch (response.status) {
            case 200: {
                let airport = {id : response.data.id, name: response.data.name};
                dispatch(getFoundAirport(airport))
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}
export const updateAirportThunk = (airportId, updatedAirportName, cityId) => (dispatch) => {
    locationAPI.updateAirport(airportId, updatedAirportName).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(getAirportsThunk(cityId))
            }
            case 400:
            case 401:
            case 404: {
                let errors = ['Error']
                dispatch(failed(errors))
                break;
            }
        }
    })
}

export default adminReducer;