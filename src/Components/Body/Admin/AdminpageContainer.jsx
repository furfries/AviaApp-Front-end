import React from 'react';
import { connect } from 'react-redux';
import { isAuthCheck } from '../../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import AdminPage from './AdminPage';
import { addCountryThunk, clearInput, deleteCountryThunk, getCitiesThunk, getCountriesThunk, 
    updateCountryName, updateCityName, addCityThunk, deleteCityThunk, updateCountryThunk, updateCountryId, 
    searchCountryThunk, updateCityId, updateCityThunk, searchCityThunk, getAirportsThunk, addAirportThunk, updateAirportName, deleteAirportThunk, searchAirportThunk, updateAirportId, updateAirportThunk 
} from '../../../redux/admin-reducer';



class AdminpageContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthCheck();
        this.props.getCountriesThunk();
    }

    render() {
        //if (!this.props.isAuth || !this.props.user.roles.includes('admin')) return <Navigate to={'/login'} replace={true} />
        return <AdminPage {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        user: state.authReducer.user,
        countries: state.adminReducer.countries,
        cities: state.adminReducer.cities,
        countryName: state.adminReducer.countryName,
        countryNameText: state.adminReducer.countryNameText,
        countryId: state.adminReducer.countryId,
        countryIdText: state.adminReducer.countryIdText,
        cityName: state.adminReducer.cityName,
        cityNameText: state.adminReducer.cityNameText,
        cityId: state.adminReducer.cityId,
        cityIdText: state.adminReducer.cityIdText,
        currentCountryId: state.adminReducer.currentCountryId,
        isFetching: state.adminReducer.isFetching,
        country: state.adminReducer.country,
        city: state.adminReducer.city,
        airports: state.adminReducer.airports,
        airport: state.adminReducer.airport,
        airportName: state.adminReducer.airportName,
        airportNameText: state.adminReducer.airportNameText,
        airportId: state.adminReducer.airportId,
        airportIdText: state.adminReducer.airportIdText,
        currentCityId: state.adminReducer.currentCityId,
        errors: state.adminReducer.errors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthCheck: () => dispatch(isAuthCheck()),
        getCountriesThunk: () => dispatch(getCountriesThunk()),
        getCitiesThunk: (countryId) => dispatch(getCitiesThunk(countryId)),
        addCountryThunk: (countryName) => dispatch(addCountryThunk(countryName)),
        updateCountryName: (countryName) => dispatch(updateCountryName(countryName)),
        updateCountryId: (countryId) => dispatch(updateCountryId(countryId)),
        deleteCountryThunk: (countryId) => dispatch(deleteCountryThunk(countryId)),
        clearInput: () => dispatch(clearInput()),
        addCityThunk: (countryId, cityName) => dispatch(addCityThunk(countryId, cityName)),
        updateCityName: (cityName) => dispatch(updateCityName(cityName)),
        updateCityId: (cityId) => dispatch(updateCityId(cityId)),
        updateCityThunk: (cityId, updatedCityName, countryId) => dispatch(updateCityThunk(cityId, updatedCityName, countryId)),
        deleteCityThunk: (cityId, countryId) => dispatch(deleteCityThunk(cityId, countryId)),
        updateCountryThunk: (id, name) => dispatch(updateCountryThunk(id, name)),
        searchCountryThunk: (countryId) => dispatch(searchCountryThunk(countryId)),
        searchCityThunk : (cityId) => dispatch(searchCityThunk(cityId)),
        getAirportsThunk : (cityId) => dispatch(getAirportsThunk(cityId)),
        addAirportThunk : (cityId, airportName) => dispatch(addAirportThunk(cityId, airportName)),
        updateAirportName : (airportName) => dispatch(updateAirportName(airportName)),
        updateAirportId : (airportId) => dispatch(updateAirportId(airportId)),
        deleteAirportThunk : (airportId, cityId) => dispatch(deleteAirportThunk(airportId, cityId)),
        searchAirportThunk : (airportId) => dispatch(searchAirportThunk(airportId)),
        updateAirportThunk : (updatedAirportName, airportId, cityId) => dispatch(updateAirportThunk(updatedAirportName, airportId, cityId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminpageContainer);