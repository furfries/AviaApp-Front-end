import { locationAPI } from "../api/api";

const GET_COUNTRIES = 'GET_COUNTRIES';
const FETCHING_FAILED = 'FETCHING_FAILED';
const GET_CITIES = 'GET_CITIES';
const UPDATE_COUNTRY_NAME = 'UPDATE_COUNTRY_NAME';
const CLEAR_INPUT = 'CLEAR_INPUT';
const UPDATE_CITY_NAME = 'UPDATE_CITY_NAME';
const IS_FETCHING = 'IS_FETCHING';
const IS_CITIES_FETCHING = 'IS_CITIES_FETCHING';
const IS_AIRPORTS_FETCHING = 'IS_AIRPORTS_FETCHING'
const GET_AIRPORTS = 'GET_AIRPORTS';
const UPDATE_AIRPORT_NAME = 'UPDATE_AIRPORT_NAME';
const DELETE_COUNTRY = 'DELETE_COUNTRY';
const ADD_COUNTRY = 'ADD_COUNTRY';
const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
const IS_FETCHING_CITIES_FAILED = 'IS_FETCHING_CITIES_FAILED';
const IS_COUNTRIES_FETCHING_FAILED = 'IS_COUNTRIES_FETCHING_FAILED';
const IS_AIRPORTS_FETCHING_FAILED = 'IS_AIRPORTS_FETCHING_FAILED';
const ADD_CITY = 'ADD_CITY';
const DELETE_CITY = 'DELETE_CITY';
const UPDATE_CITY = 'UPDATE_CITY';
const ADD_AIRPORT = 'ADD_AIRPORT';
const DELETE_AIRPORT = 'DELETE_AIRPORT';
const UPDATE_AIRPORT = 'UPDATE_AIRPORT';
const SET_CURRENT_COUNTRY_NAME = 'SET_CURRENT_COUNTRY_NAME';
const SET_CURRENT_CITY_NAME = 'SET_CURRENT_CITY_NAME';
const SET_CURRENT_AIRPORT_NAME = 'SET_CURRENT_AIRPORT_NAME';

let initialState = {
    countries : [],
    cities : [],
    airports: [],
    errors : null,
    countryName: '',
    countryNameText: '',
    cityName:'',
    cityNameText: '',
    airportName: '',
    airportNameText: '',
    isFetching: false,
    isCitiesFetching: false,
    isAirportsFetching: false,
    isFetchingCitiesFailed: false,
    isCountriesFetchingFailed: false,
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
        case FETCHING_FAILED : {
            return {
                ...state,
                errors: action.errors
            }
        }
        case UPDATE_COUNTRY_NAME : {
            return {
                ...state,
                countryNameText: action.countryName.charAt(0).toUpperCase() + action.countryName.slice(1),

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
                cityNameText: action.cityName.charAt(0).toUpperCase() + action.cityName.slice(1),
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case IS_CITIES_FETCHING: {
            return {
                ...state,
                isCitiesFetching: action.isCitiesFetching
            }
        }
        case IS_AIRPORTS_FETCHING: {
            return {
                ...state,
                isAirportsFetching: action.isAirportsFetching
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
                airportNameText: action.airportName.charAt(0).toUpperCase() + action.airportName.slice(1),
            }
        }
        case DELETE_COUNTRY: {
            const countriesCopy = state.countries.map(e => e)
            return {
                ...state,
                countries: countriesCopy.filter(e => e.id !== action.countryId)
            }
        }
        case ADD_COUNTRY: {
            const countriesCopy = state.countries.map(e => e)
            return {
                ...state,
                countries: countriesCopy.concat(action.addedCountry).sort((a, b) => a.name > b.name ? 1 : -1)
            }
        }
        case UPDATE_COUNTRY: {
            const countriesCopy = state.countries.map(e => e)
            return {
                ...state,
                countries: countriesCopy.map(e => {
                    if (e.id === action.countryId) {
                      return action.updatedCountry;
                    }
                    return e;
                  }).sort((a, b) => a.name > b.name ? 1 : -1)
            }
        }
        case IS_FETCHING_CITIES_FAILED: {
            return {
                ...state, 
                isFetchingCitiesFailed: action.isFetchingCitiesFailed
            }
        }
        case IS_COUNTRIES_FETCHING_FAILED: {
            return {
                ...state,
                isCountriesFetchingFailed: action.isCountriesFetchingFailed
            }
        }
        case IS_AIRPORTS_FETCHING_FAILED: {
            return {
                ...state,
                isAirportsFetchingFailed: action.isAirportsFetchingFailed
            }
        }
        case ADD_CITY: {
            const citiesCopy = state.cities.map(e => e)
            return {
                ...state,
                cities: citiesCopy.concat(action.addedCity).sort((a, b) => a.name > b.name ? 1 : -1)
            }
        }
        case DELETE_CITY: {
            const citiesCopy = state.cities.map(e => e)
            return {
                ...state,
                cities: citiesCopy.filter(e => e.id !== action.cityId)
            }
        }
        case UPDATE_CITY: {
            const citiesCopy = state.cities.map(e => e)
            return {
                ...state,
                cities: citiesCopy.map(e => {
                    if (e.id === action.id) {
                      return action.updatedCity;
                    }
                    return e;
                  }).sort((a, b) => a.name > b.name ? 1 : -1)
            }
        }
        case ADD_AIRPORT: {
            const airportsCopy = state.airports.map(e => e)
            return {
                ...state,
                airports: airportsCopy.concat(action.addedAirport).sort((a, b) => a.name > b.name ? 1 : -1)
            }
        }
        case DELETE_AIRPORT: {
            const airportsCopy = state.airports.map(e => e)
            return {
                ...state,
                airports: airportsCopy.filter(e => e.id !== action.airportId)
            }
        }
        case UPDATE_AIRPORT: {
            const airportsCopy = state.airports.map(e => e)
            return {
                ...state,
                airports: airportsCopy.map(e => {
                    if (e.id === action.id) {
                      return action.updatedAirport;
                    }
                    return e;
                  }).sort((a, b) => a.name > b.name ? 1 : -1)
            }
        }
        case SET_CURRENT_COUNTRY_NAME: {
            return {
                ...state,
                countryNameText: action.countryNameText
            }
        }
        case SET_CURRENT_CITY_NAME: {
            return {
                ...state,
                cityNameText: action.cityNameText
            }
        }
        case SET_CURRENT_AIRPORT_NAME: {
            return {
                ...state,
                airportNameText: action.airportNameText
            }
        }
        default : return state
    }
}

export const getCountries = (countries) => ({type: GET_COUNTRIES, countries});
export const fetchingFailed = (errors) => ({type: FETCHING_FAILED, errors});
export const getCities = (cities) => ({type: GET_CITIES, cities});
export const updateCountryName = (countryName) => ({type: UPDATE_COUNTRY_NAME, countryName});
export const updateCityName = (cityName) => ({type: UPDATE_CITY_NAME, cityName});
export const clearInput = () => ({type: CLEAR_INPUT});
export const isFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const getAirports = (airports) => ({type: GET_AIRPORTS, airports});
export const updateAirportName = (airportName) => ({type: UPDATE_AIRPORT_NAME, airportName});
export const isCitiesFetching = (isCitiesFetching) => ({type: IS_CITIES_FETCHING, isCitiesFetching});
export const isAirportsFetching = (isAirportsFetching) => ({type: IS_AIRPORTS_FETCHING, isAirportsFetching});
export const deleteCountry = (countryId) => ({type: DELETE_COUNTRY, countryId});
export const addCountry = (addedCountry) => ({type: ADD_COUNTRY, addedCountry});
export const updateCountry = (countryId, updatedCountry) => ({type: UPDATE_COUNTRY, countryId, updatedCountry});
export const addCity = (addedCity) => ({type: ADD_CITY, addedCity});
export const deleteCity = (cityId) => ({type: DELETE_CITY, cityId});
export const updateCity = (id, updatedCity) => ({type: UPDATE_CITY, id, updatedCity});
export const addAirport = (addedAirport) => ({type: ADD_AIRPORT, addedAirport});
export const deleteAirport = (airportId) => ({type: DELETE_AIRPORT, airportId});
export const updateAirport = (id, updatedAirport) => ({type: UPDATE_AIRPORT, id, updatedAirport});
export const isFetchingCitiesFailed = (isFetchingCitiesFailed) => ({type: IS_FETCHING_CITIES_FAILED, isFetchingCitiesFailed});
export const isCountriesFetchingFailed = (isCountriesFetchingFailed) => ({type: IS_COUNTRIES_FETCHING_FAILED, isCountriesFetchingFailed});
export const isAirportsFetchingFailed = (isAirportsFetchingFailed) => ({type: IS_AIRPORTS_FETCHING_FAILED, isAirportsFetchingFailed});
export const setCurrentCountyName = (countryNameText) => ({type: SET_CURRENT_COUNTRY_NAME, countryNameText});
export const setCurrentCityName = (cityNameText) => ({type: SET_CURRENT_CITY_NAME, cityNameText});
export const setCurrentAirportName = (airportNameText) => ({type: SET_CURRENT_AIRPORT_NAME, airportNameText})

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
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isCountriesFetchingFailed(true))
                dispatch(isFetching(false))
                break;
            }
        }
    })
};

export const addCountryThunk = (countryName) => (dispatch) => {
    dispatch(isFetching(true))
    locationAPI.addCountry(countryName).then(response => {
        switch (response.status) {
            case 200: {
                let addedCountry = response.data
                dispatch(addCountry(addedCountry))
                dispatch(isFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isCountriesFetchingFailed(true))
                dispatch(isFetching(false))
                setTimeout( () => {
                    dispatch(isCountriesFetchingFailed(false))
                }, 2500)
                break;
            }
        }
    })
}

export const deleteCountryThunk = (countryId) => (dispatch) => {
    dispatch(isFetching(true))
    locationAPI.deleteCountry(countryId).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(deleteCountry(countryId))
                dispatch(isFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isCountriesFetchingFailed(true))
                dispatch(isFetching(false))
                setTimeout( () => {
                    dispatch(isCountriesFetchingFailed(false))
                }, 2500)
                break;
            }
    }})
}

export const updateCountryThunk = (id, name) => (dispatch) => {
    dispatch(isFetching(true))
    locationAPI.updateCountry(id, name).then(response => {
        switch (response.status) {
            case 200: {
                let updatedCountry = {id, name}
                let countryId = id
                dispatch(updateCountry(countryId, updatedCountry))
                dispatch(isFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isCountriesFetchingFailed(true))
                dispatch(isFetching(false))
                setTimeout( () => {
                    dispatch(isCountriesFetchingFailed(false))
                }, 2500)
                break;
            }
    }})
}

export const getCitiesThunk = (countryId) => (dispatch) => {
    dispatch(isCitiesFetching(true))
    locationAPI.getCities(countryId).then(response => {
        switch (response.status){
            case 200: {
                let cities = response.data;
                dispatch(getCities(cities));
                dispatch(isCitiesFetching(false))
                dispatch(isFetchingCitiesFailed(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                dispatch(isCitiesFetching(false))
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isFetchingCitiesFailed(true))
                break;
            }
        }
    })
};

export const addCityThunk = (countryId, cityName) => (dispatch) => {
    dispatch(isCitiesFetching(true))
    locationAPI.addCity(countryId, cityName).then(response => {
        switch (response.status) {
            case 200: {
                let addedCity = response.data
                dispatch(addCity(addedCity))
                dispatch(isCitiesFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                dispatch(isCitiesFetching(false))
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isFetchingCitiesFailed(true))
                setTimeout( () => {
                    dispatch(isFetchingCitiesFailed(false))
                }, 2500)
                break;
            }
    }})
}
export const deleteCityThunk = (cityId) => (dispatch) => {
    dispatch(isCitiesFetching(true))
    locationAPI.deleteCity(cityId).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(deleteCity(cityId))
                dispatch(isCitiesFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                dispatch(isCitiesFetching(false))
                dispatch(isFetchingCitiesFailed(true))
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                setTimeout( () => {
                    dispatch(isFetchingCitiesFailed(false))
                }, 2500)
                break;
            }
        }
    })
}
export const updateCityThunk = (cityId, updatedCityName, countryId) => (dispatch) => {
    dispatch(isCitiesFetching(true))
    locationAPI.updateCity(cityId, updatedCityName).then(response => {
        switch (response.status) {
            case 200: {
                let id = cityId
                let name = updatedCityName
                let updatedCity = {id, name, countryId}
                dispatch(updateCity(id, updatedCity))
                dispatch(isCitiesFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isCitiesFetching(false))
                dispatch(isFetchingCitiesFailed(true))
                setTimeout( () => {
                    dispatch(isFetchingCitiesFailed(false))
                }, 2500)
                break;
            }
        }
    })
}
export const getAirportsThunk = (cityId) => (dispatch) => {
    dispatch(isAirportsFetching(true))
    locationAPI.getAirports(cityId).then(response => {
        switch (response.status) {
            case 200: {
                let airports = response.data;
                dispatch(getAirports(airports));
                dispatch(isAirportsFetching(false))
                dispatch(isAirportsFetchingFailed(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isAirportsFetchingFailed(true))
                dispatch(isAirportsFetching(false))
                break;
            }
        }
    })
}
export const addAirportThunk = (cityId, airportName) => (dispatch) => {
    dispatch(isAirportsFetching(true))
    locationAPI.addAirport(cityId, airportName).then(response => {
        switch (response.status) {
            case 200: {
                let addedAirport = response.data
                dispatch(addAirport(addedAirport))
                dispatch(isAirportsFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isAirportsFetchingFailed(true))
                dispatch(isAirportsFetching(false))
                setTimeout( () => {
                    dispatch(isAirportsFetchingFailed(false))
                }, 2500)
                break;
            }
        }
    })
}
export const deleteAirportThunk = (airportId) => (dispatch) => {
    dispatch(isAirportsFetching(true))
    locationAPI.deleteAirport(airportId).then(response => {
        switch (response.status) {
            case 200: {
                dispatch(deleteAirport(airportId))
                dispatch(isAirportsFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isAirportsFetchingFailed(true))
                dispatch(isAirportsFetching(false))
                setTimeout( () => {
                    dispatch(isAirportsFetchingFailed(false))
                }, 2500)
                break;
            }
        }
    })
}
export const updateAirportThunk = (airportId, updatedAirportName, cityId) => (dispatch) => {
    dispatch(isAirportsFetching(true))
    locationAPI.updateAirport(airportId, updatedAirportName).then(response => {
        switch (response.status) {
            case 200: {
                let id = airportId
                let name = updatedAirportName
                let updatedAirport = {id, name, cityId}
                dispatch(updateAirport(id, updatedAirport))
                dispatch(isAirportsFetching(false))
                break;
            }
            case 400:
            case 401:
            case 404: {
                let errors = (`Error ${response.status} ${response.statusText}`)
                dispatch(fetchingFailed(errors))
                dispatch(isAirportsFetchingFailed(true))
                dispatch(isAirportsFetching(false))
                setTimeout( () => {
                    dispatch(isAirportsFetchingFailed(false))
                }, 2500)
                break;
            }
        }
    })
}

export default adminReducer;