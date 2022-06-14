import React, { useState } from 'react';
import AddCityButton from './AddCityButton.jsx/AddCountryButton/AddCityButton';
import CitiesModal from "./CitiesModal";
import UpdateCityButton from './UpdateCityButton/UpdateCityButton';
import { MDBBtn } from 'mdb-react-ui-kit';
import AirportsModalContainer from '../Airports/AirportsModalContainer';
import DeleteCityModal from './DeleteCityButton/DeleteCityModal';
import { connect } from 'react-redux';
import { addCityThunk, deleteCityThunk, getAirportsThunk, setCurrentCityName, updateCityName, updateCityThunk, updateCountryThunk }
    from '../../../../redux/admin-reducer';

const CitiesModalContainer = (props) => {
    const [airportsModalPage, setAirportsModal] = useState(false);
    const [cityId, setCityId] = useState('')
    const [cityName, setCityName] = useState('')
    const [addCityModal, setAddCityModal] = useState(false);
    const [updateCityModal, setUpdateCityModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const toggleShow = (cityId, cityName) => {
        setAirportsModal(!airportsModalPage);
        props.getAirportsThunk(cityId);
        setCityName(cityName);
        setCityId(cityId);
    }

    const toggleAirportsClose = () => setAirportsModal(!airportsModalPage);

    const toggleAddShow = () => {
        setAddCityModal(!addCityModal);
        props.clearInput();
    }

    const toggleUpdateShow = (cityId, cityName) => {
        setUpdateCityModal(!updateCityModal);
        setCityId(cityId);
        props.setCurrentCityName(cityName)
    }

    const toggleUpdateClose = () => {
        setUpdateCityModal(!updateCityModal);
        props.clearInput();
    }

    const toggleDeleteShow = (cityId, cityName) => {
        setDeleteModal(!deleteModal);
        setCityId(cityId)
        setCityName(cityName)
    }

    const onCityNameChange = (e) => {
        props.updateCityName(e.target.value = e.target.value.replace(/[^A-Za-z]/ig, ''))
    }

    const addCity = () => {
        props.addCityThunk(props.countryId, props.cityNameText);
        setAddCityModal(!addCityModal);
        props.clearInput();
    }

    const onDeleteCity = () => {
        props.deleteCityThunk(cityId, props.countryId);
        setDeleteModal(!deleteModal);
    }

    const updateCity = () => {
        props.updateCityThunk(cityId, props.cityNameText, props.countryId);
        setUpdateCityModal(!updateCityModal);
        props.clearInput();
    }

    let citiesRow = props.cities.map((city, index) => {
        return (
            <tr key={index}>
                <td>
                    <h6 className='fw-bold'>{city.name}</h6>
                </td>
                <td>
                    <MDBBtn size='sm' outline onClick={() => toggleShow(city.id, city.name)}>Airports</MDBBtn>
                </td>
                <td>
                    <MDBBtn outline color='warning' size='sm'
                        onClick={() => toggleUpdateShow(city.id, city.name, city.countryId)}>Update</MDBBtn>
                </td>
                <td>
                    <MDBBtn outline size='sm' color='danger' onClick={() => toggleDeleteShow(city.id, city.name)}>
                        Delete</MDBBtn>
                </td>
            </tr>
        )
    })

    if (props.cities.length == 0) {
        citiesRow = (
            <tr key={0}>
                <td>
                    <p className='text-center'>NONE</p>
                </td>
            </tr>
        );
    }

    if (props.isFetchingCitiesFailed) {
        citiesRow = (
            <tr key={0}>
                <td>
                    <p className='text-center text-danger'>{props.errors}</p>
                </td>
            </tr>
        );
    }

    let addCityButton = <AddCityButton {...props}
        toggleShow={toggleAddShow}
        onCityNameChange={onCityNameChange}
        addCity={addCity}
    />

    let updateCityButton = <UpdateCityButton {...props}
        toggleUpdateShow={toggleUpdateShow}
        onCityNameChange={onCityNameChange}
        updateCity={updateCity}
        toggleUpdateClose={toggleUpdateClose}
    />

    let deleteCityButton = <DeleteCityModal {...props}
        toggleDeleteShow={toggleDeleteShow}
        onDeleteCity={onDeleteCity}
        cityName={cityName}
    />

    let airportsModal = <AirportsModalContainer {...props}
        toggleAirportsClose={toggleAirportsClose}
        cityName={cityName}
        cityId={cityId}
    />

    return (
        <CitiesModal {...props}
            citiesRow={citiesRow}
            airportsModalPage={airportsModalPage}
            setAirportsModal={setAirportsModal}
            toggleAirportsClose={toggleAirportsClose}
            addCityModal={addCityModal}
            setAddCityModal={setAddCityModal}
            toggleAddShow={toggleAddShow}
            updateCityModal={updateCityModal}
            setUpdateCityModal={setUpdateCityModal}
            addCity={addCity}
            onDeleteCity={onDeleteCity}
            updateCity={updateCity}
            addCityButton={addCityButton}
            updateCityButton={updateCityButton}
            airportsModal={airportsModal}
            toggleUpdateShow={toggleUpdateShow}
            // currentCountryName={currentCountryName}
            deleteCityButton={deleteCityButton}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal} />
    )
}

const mapStateToProps = (state) => {
    return {
        cities: state.adminReducer.cities,
        cityName: state.adminReducer.cityName,
        cityNameText: state.adminReducer.cityNameText,
        isFetching: state.adminReducer.isFetching,
        isCitiesFetching: state.adminReducer.isCitiesFetching,
        currentCityId: state.adminReducer.currentCityId,
        errors: state.adminReducer.errors,
        isFetchingCitiesFailed: state.adminReducer.isFetchingCitiesFailed,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCityThunk: (countryId, cityName) => dispatch(addCityThunk(countryId, cityName)),
        updateCityName: (cityName) => dispatch(updateCityName(cityName)),
        updateCityThunk: (cityId, updatedCityName, countryId) => dispatch(updateCityThunk(cityId, updatedCityName, countryId)),
        deleteCityThunk: (cityId, countryId) => dispatch(deleteCityThunk(cityId, countryId)),
        updateCountryThunk: (id, name) => dispatch(updateCountryThunk(id, name)),
        getAirportsThunk: (cityId) => dispatch(getAirportsThunk(cityId)),
        setCurrentCityName: (cityNameText) => dispatch(setCurrentCityName(cityNameText))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesModalContainer);
