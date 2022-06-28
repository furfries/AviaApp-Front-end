import React, { useState } from 'react';
import {
    MDBBtn
} from 'mdb-react-ui-kit';
import Countries from './Countries';
import {
    addCountryThunk, clearInput, deleteCountryThunk, getCitiesThunk, getCountriesThunk,
    updateCountryName, updateCountryThunk, setCurrentCountyName
} from '../../../../redux/admin-reducer';
import CitiesModalContainer from '../Cities/CitiesModalContainer';
import AddCountryButton from './AddCountryButton/AddCountryButton';
import UpdateCountryButton from './UpdateCountryButton/UpdateCountryButton';
import { connect } from 'react-redux';
import DeleteCountryModal from './DeleteCountryModal/DeleteCountryModal';


const CountriesContainer = (props) => {

    const [countryId, setCountryId] = useState('')
    const [countryName, setCountryName] = useState('')
    const [addCountryModal, setAddCountryModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [optSmModal, setOptSmModal] = useState(false);
    const [updateCountryModal, setUpdateCountryModal] = useState(false);

    const toggleAddShow = () => {
        setAddCountryModal(!addCountryModal);
        props.clearInput();
    }

    const toggleShow = (countryId, coutnryName) => {
        setOptSmModal(!optSmModal);
        setCountryId(countryId)
        setCountryName(coutnryName)
        props.getCitiesThunk(countryId);
    }

    const toggleClose = () => setOptSmModal(!optSmModal);

    const toggleUpdateClose = () => {
        setUpdateCountryModal(!updateCountryModal);
        props.clearInput();
    }

    const toggleUpdateShow = (countryId, countryName) => {
        setUpdateCountryModal(!updateCountryModal);
        setCountryId(countryId)
        setCountryName(countryName)
        props.setCurrentCountyName(countryName)
    }
    
    const toggleDeleteShow = (countryId, countryName) => {
        setDeleteModal(!deleteModal);
        setCountryId(countryId)
        setCountryName(countryName)
    }
   
    const onCountryNameChange = (e) => {
        props.updateCountryName(e.target.value = e.target.value.replace(/[^A-Za-z]/ig, ''))
    }
    
    const addCountry = () => {
        props.addCountryThunk(props.countryNameText);
        props.clearInput();
        setAddCountryModal(!addCountryModal);
    }
    
    const onDeleteCountry = () => {
        props.deleteCountryThunk(countryId)
        setDeleteModal(!deleteModal);
    }
    
    const updateCountry = () => {
        props.updateCountryThunk(countryId, props.countryNameText);
        props.clearInput();
        setUpdateCountryModal(!updateCountryModal);
        props.clearInput();
    }

    let countriesRow = props.countries.map((country, index) => {
        return (
        <tr key={index}>
            <td>
                <p className="fw-bold">{country.name}</p>
            </td>
            <td>
                <MDBBtn size='sm' outline onClick={() => toggleShow(country.id, country.name)}>Cities</MDBBtn>
            </td>
            <td> 
                <MDBBtn outline color='warning' size='sm' onClick={() => toggleUpdateShow(country.id, country.name)}>
                Update</MDBBtn>
            </td>
            <td>
                <MDBBtn outline size='sm' color='danger'onClick={() => toggleDeleteShow(country.id, country.name)}>
                Delete</MDBBtn>
            </td>
        </tr>)
    })

    if (props.isCountriesFetchingFailed) {
        countriesRow = (
            <tr key={0}>
                <td>
                    <p className='text-center text-danger'>{props.errors}</p>
                </td>
            </tr>
        );
    }

    let addCountryButton = <AddCountryButton 
        toggleAddShow={toggleAddShow} 
        onCountryNameChange={onCountryNameChange}
        countryNameText={props.countryNameText} 
        addCountry={addCountry} 
    />

    let updateCountryButton = <UpdateCountryButton 
        {...props}
        onCountryNameChange={onCountryNameChange} 
        countryName={countryName}
        countryNameText={props.countryNameText} 
        toggleUpdateShow={toggleUpdateShow} 
        updateCountry={updateCountry} 
        toggleUpdateClose={toggleUpdateClose}
    />

    let deleteButton = <DeleteCountryModal 
        toggleDeleteShow={toggleDeleteShow} 
        onDeleteCountry={onDeleteCountry}
        countryName={countryName} 
    />

    let citiesModal = <CitiesModalContainer
        {...props} 
        toggleClose={toggleClose} 
        countryId={countryId} 
        countryName={countryName} 
    />

    return (
        <Countries {...props}
            countriesRow={countriesRow}
            addCountryModal={addCountryModal}
            toggleAddShow={toggleAddShow}
            setAddCountryModal={setAddCountryModal}
            toggleShow={toggleShow}
            optSmModal={optSmModal}
            setOptSmModal={setOptSmModal}
            toggleClose={toggleClose}
            addCountryButton={addCountryButton}
            updateCountryModal={updateCountryModal}
            setUpdateCountryModal={setUpdateCountryModal}
            updateCountryButton={updateCountryButton}
            citiesModal={citiesModal}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            deleteButton={deleteButton}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.adminReducer.countries,
        countryName: state.adminReducer.countryName,
        countryNameText: state.adminReducer.countryNameText,
        isFetching: state.adminReducer.isFetching,
        errors: state.adminReducer.errors,
        isCountriesFetchingFailed: state.adminReducer.isCountriesFetchingFailed,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountriesThunk: () => dispatch(getCountriesThunk()),
        addCountryThunk: (countryName) => dispatch(addCountryThunk(countryName)),
        updateCountryName: (countryName) => dispatch(updateCountryName(countryName)),
        deleteCountryThunk: (countryId) => dispatch(deleteCountryThunk(countryId)),
        clearInput: () => dispatch(clearInput()),
        updateCountryThunk: (id, name) => dispatch(updateCountryThunk(id, name)),
        getCitiesThunk: (countryId) => dispatch(getCitiesThunk(countryId)),
        setCurrentCountyName: (countryNameText) => dispatch(setCurrentCountyName(countryNameText))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
