import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { isAuthCheck } from '../../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import AdminPage from './AdminPage';
import AddCountryButton from './AddCountryButton/AddCountryButton';
import UpdateCountryButton from './UpdateCountryButton/UpdateCountryButton';
import { addCountryThunk, clearInput, deleteCountryThunk, getCitiesThunk, getCountriesThunk, 
    updateCountryName, updateCityName, addCityThunk, deleteCityThunk, updateCountryThunk,
    searchCountryThunk, updateCityThunk, searchCityThunk, getAirportsThunk, addAirportThunk, 
    updateAirportName, deleteAirportThunk, searchAirportThunk, updateAirportThunk,
} from '../../../redux/admin-reducer';
import { MDBBtn } from 'mdb-react-ui-kit';
import CitiesModalContainer from './Cities/CitiesModalContainer';

const AdminpageContainer = (props) => {
    useEffect(() => {
        props.getCountriesThunk();
      }, []);
    const [addCountryModal, setAddCountryModal] = useState(false);
    const toggleAddShow = () => {
        setAddCountryModal(!addCountryModal);
        props.clearInput();
    }
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleShow = (countryId) => {
        setOptSmModal(!optSmModal);
        props.getCitiesThunk(countryId);
    }
    const toggleClose = () => setOptSmModal(!optSmModal);
    const [countryId, setCountryId] = useState('')
    const [updateCountryModal, setUpdateCountryModal] = useState(false);
    const toggleUpdateShow = (countryId) => {
        setUpdateCountryModal(!updateCountryModal);
        setCountryId(countryId)
        props.clearInput();
    }
    const onCountryNameChange = (e) => {
        props.updateCountryName(e.target.value)
    }
    const addCountry = () => {
        props.addCountryThunk(props.countryNameText);
       props.clearInput();
       setAddCountryModal(!addCountryModal);
     }
     const onDeleteCountry = (countryId) => {
        props.deleteCountryThunk(countryId)
    }
    const updateCountry = () => {
        props.updateCountryThunk(countryId, props.countryNameText);
        props.clearInput();
        setUpdateCountryModal(!updateCountryModal);
    }

     let countriesRow = props.countries.map((country, index) => {
        return (<tr key={index}><td><p className="fw-bold">{country.name}</p></td><td>
            <MDBBtn size='sm' outline onClick={() => toggleShow(country.id)}>Cities</MDBBtn></td>
            <td> <MDBBtn outline color='warning' size='sm' onClick={() => toggleUpdateShow(country.id)}>
            Update</MDBBtn></td><td><MDBBtn outline size='sm' color='danger'
            onClick={() => onDeleteCountry(country.id)}>Delete</MDBBtn></td></tr>)
    })
    let addCountryButton = <AddCountryButton toggleAddShow={toggleAddShow} onCountryNameChange={onCountryNameChange}
    countryNameText={props.countryNameText} addCountry={addCountry} />
    let updateCountryButton = <UpdateCountryButton onCountryNameChange={onCountryNameChange}
    countryNameText={props.countryNameText} toggleUpdateShow={toggleUpdateShow} updateCountry={updateCountry} />
    let citiesModal = <CitiesModalContainer {...props} toggleClose={toggleClose} />
    return (
        <AdminPage {...props} countriesRow={countriesRow} addCountryModal={addCountryModal} 
        toggleAddShow={toggleAddShow} setAddCountryModal={setAddCountryModal} addCountry={addCountry} 
        toggleShow={toggleShow} optSmModal={optSmModal} setOptSmModal={setOptSmModal} toggleClose={toggleClose} 
        addCountryButton={addCountryButton} updateCountryModal={updateCountryModal} 
        setUpdateCountryModal={setUpdateCountryModal} updateCountry={updateCountry} 
        toggleUpdateShow={toggleUpdateShow} updateCountryButton={updateCountryButton} citiesModal={citiesModal}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        user: state.authReducer.user,
        countries: state.adminReducer.countries,
        cities: state.adminReducer.cities,
        countryName: state.adminReducer.countryName,
        countryNameText: state.adminReducer.countryNameText,
        cityName: state.adminReducer.cityName,
        cityNameText: state.adminReducer.cityNameText,
        currentCountryId: state.adminReducer.currentCountryId,
        isFetching: state.adminReducer.isFetching,
        isCitiesFetching: state.adminReducer.isCitiesFetching,
        isAirportsFetching: state.adminReducer.isAirportsFetching,
        country: state.adminReducer.country,
        city: state.adminReducer.city,
        airports: state.adminReducer.airports,
        airport: state.adminReducer.airport,
        airportName: state.adminReducer.airportName,
        airportNameText: state.adminReducer.airportNameText,
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
        deleteCountryThunk: (countryId) => dispatch(deleteCountryThunk(countryId)),
        clearInput: () => dispatch(clearInput()),
        addCityThunk: (countryId, cityName) => dispatch(addCityThunk(countryId, cityName)),
        updateCityName: (cityName) => dispatch(updateCityName(cityName)),
        updateCityThunk: (cityId, updatedCityName, countryId) => dispatch(updateCityThunk(cityId, updatedCityName, countryId)),
        deleteCityThunk: (cityId, countryId) => dispatch(deleteCityThunk(cityId, countryId)),
        updateCountryThunk: (id, name) => dispatch(updateCountryThunk(id, name)),
        searchCountryThunk: (countryId) => dispatch(searchCountryThunk(countryId)),
        searchCityThunk : (cityId) => dispatch(searchCityThunk(cityId)),
        getAirportsThunk : (cityId) => dispatch(getAirportsThunk(cityId)),
        addAirportThunk : (cityId, airportName) => dispatch(addAirportThunk(cityId, airportName)),
        updateAirportName : (airportName) => dispatch(updateAirportName(airportName)),
        deleteAirportThunk : (airportId, cityId) => dispatch(deleteAirportThunk(airportId, cityId)),
        searchAirportThunk : (airportId) => dispatch(searchAirportThunk(airportId)),
        updateAirportThunk : (updatedAirportName, airportId, cityId) => dispatch(updateAirportThunk(updatedAirportName, airportId, cityId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminpageContainer);