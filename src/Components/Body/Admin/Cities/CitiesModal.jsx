import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBTable, MDBTableBody, MDBInput, MDBContainer
} from 'mdb-react-ui-kit';
import AddCityButton from './AddCityButton.jsx/AddCountryButton/AddCityButton';
import UpdateCityButton from './UpdateCityButton/UpdateCityButton';
import SearchCityModal from './SearchCityModal/SearchCityModal';
import AirportsModal from '../Airports/AirportsModal';

const CitiesModal = (props) => {
    const [airportsModalPage, setAirportsModal] = useState(false);
    const toggleShow = (cityId) => {
        setAirportsModal(!airportsModalPage);
        props.getAirportsThunk(cityId);
    }
    const toggleAirportsClose = () => setAirportsModal(!airportsModalPage);
    const [addCityModal, setAddCityModal] = useState(false);
    const toggleAddShow = () => {
        setAddCityModal(!addCityModal);
        props.clearInput();
    }
    const [updateCityModal, setUpdateCityModal] = useState(false);
    const toggleUpdateShow = () => {
        setUpdateCityModal(!updateCityModal);
        props.clearInput();
    }
    const [searchCityModal, setSearchCityModal] = useState(false);
    const toggleSearchShow = () => {
        setSearchCityModal(!searchCityModal);
        props.searchCityThunk(props.cityIdText)
        props.clearInput();
    }
    const toggleSearchClose = () => {
        setSearchCityModal(!searchCityModal);
    }
    const onCityNameChange = (e) => {
        props.updateCityName(e.target.value)
    }
    const onCityIdChange = (e) => {
        props.updateCityId(e.target.value)
    }
    const addCity = () => {
        props.addCityThunk(props.currentCountryId, props.cityNameText);
        setAddCityModal(!addCityModal);
        props.clearInput();
    }
    const onDeleteCity = (cityId) => {
        props.deleteCityThunk(cityId, props.currentCountryId)
    }
    const updateCity = () => {
        props.updateCityThunk(props.cityIdText, props.cityNameText, props.currentCountryId);
        setUpdateCityModal(!updateCityModal);
        props.clearInput();
    }
    let citiesRow = [];
    if (props.cities) {
        for (var i = 0; i < props.cities.length; i++) {
            let id = [];
            id.push(props.cities[i].id);
            citiesRow.push(<tr key={id}><td><h6 className='fw-bold'>{props.cities[i].name}</h6><p className="fst-italic">
                {id}</p></td><td><MDBBtn size='sm' outline onClick={() => toggleShow(id)}>Airports</MDBBtn></td>
                <td><MDBBtn outline size='sm'
                    color='danger' onClick={() => onDeleteCity(id)}>Delete</MDBBtn></td></tr>)
        }
    }
    if (props.cities.length == 0) {
        citiesRow.push(<tr key={0}><td><p className='text-center'>NONE</p></td></tr>);
    }

    let addCityButton = <AddCityButton {...props} toggleShow={toggleAddShow} onCityNameChange={onCityNameChange}
        addCity={addCity} />
    let updateCityButton = <UpdateCityButton {...props} toggleUpdateShow={toggleUpdateShow}
        onCityNameChange={onCityNameChange} onCityIdChange={onCityIdChange} updateCity={updateCity} />
    let searchCityButton = <SearchCityModal {...props} toggleSearchClose={toggleSearchClose} />
    let airportsModal = <AirportsModal {...props} toggleAirportsClose={toggleAirportsClose} />
    return (
        <MDBModalDialog size='xl'>
            <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>List of cities</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={props.toggleClose}></MDBBtn>
                </MDBModalHeader>
                <MDBContainer>
                    <MDBTable hover className='caption-top'>
                        <caption className='d-flex justify-content-around'>
                            <MDBBtn outline color='success' size='sm' onClick={toggleAddShow}>Add new city</MDBBtn>
                            {props.cities.length == 0 ? <MDBBtn outline color='warning' size='sm' disabled>Update city name</MDBBtn> :
                                <MDBBtn outline color='warning' size='sm' onClick={toggleUpdateShow}>Update city name</MDBBtn>}
                            <div className='d-flex '>
                                {props.cities.length == 0 ? <MDBInput label='Enter city ID' type='text' className='me-3' disabled /> :
                                    <MDBInput label='Enter city ID' type='text' className='me-3' onChange={onCityIdChange}
                                        value={props.cityIdText} />}
                                {props.cityIdText ? <MDBBtn outline color='secondary' size='sm' className='ps-3' onClick={toggleSearchShow}>Search city by ID</MDBBtn> :
                                    <MDBBtn outline color='secondary' size='sm' className='ps-3' disabled>Search city by ID</MDBBtn>}
                            </div>
                            <MDBModal show={addCityModal} setShow={setAddCityModal}
                                tabIndex='-2' className='bg-dark'>
                                {addCityButton}
                            </MDBModal>
                            <MDBModal show={updateCityModal} setShow={setUpdateCityModal}
                                tabIndex='-2' className='bg-dark'>
                                {updateCityButton}
                            </MDBModal>
                            <MDBModal show={searchCityModal} setShow={setSearchCityModal}
                                tabIndex='-2' className='bg-dark'>
                                {searchCityButton}
                            </MDBModal>
                        </caption>
                        <MDBTableBody>
                            {citiesRow}
                            <MDBModal show={airportsModalPage} className='bg-dark' tabIndex='-1' setShow={setAirportsModal}>
                                {airportsModal}
                            </MDBModal>
                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>
            </MDBModalContent>
        </MDBModalDialog>
    );
}

export default CitiesModal;