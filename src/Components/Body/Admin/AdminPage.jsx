import React, { useState } from 'react';
import {
    MDBBtn, MDBTable, MDBTableBody, MDBInput,
    MDBModal, MDBCard, MDBCardBody, MDBCardTitle, MDBSpinner, MDBContainer
} from 'mdb-react-ui-kit';
import AddCountryButton from './AddCountryButton/AddCountryButton';
import UpdateCountryButton from './UpdateCountryButton/UpdateCountryButton';
import CitiesModal from './Cities/CitiesModal';
import SearchCountryModal from './SearchCountryModal/SearchCountryModal';

const AdminPage = (props) => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleShow = (countryId) => {
        setOptSmModal(!optSmModal);
        props.getCitiesThunk(countryId);
    }
    const toggleClose = () => setOptSmModal(!optSmModal);
    const [addCountryModal, setAddCountryModal] = useState(false);
    const toggleAddShow = () => {
        setAddCountryModal(!addCountryModal);
        props.clearInput();
    }
    const [updateCountryModal, setUpdateCountryModal] = useState(false);
    const toggleUpdateShow = () => {
        setUpdateCountryModal(!updateCountryModal);
        props.clearInput();
    }
    const [searchCountryModal, setSearchCountryModal] = useState(false);
    const toggleSearchShow = () => {
        setSearchCountryModal(!searchCountryModal);
        props.searchCountryThunk(props.countryIdText);
        props.clearInput();
    }
    const toggleSearchClose = () => setSearchCountryModal(!searchCountryModal);
    const onDeleteCountry = (countryId) => {
        props.deleteCountryThunk(countryId)
    }
    const onCountryNameChange = (e) => {
        props.updateCountryName(e.target.value)
    }
    const onCountryIdChange = (e) => {
        props.updateCountryId(e.target.value)
    }
    const addCountry = () => {
        props.addCountryThunk(props.countryNameText);
        props.clearInput();
        setAddCountryModal(!addCountryModal);
    }
    const updateCountry = () => {
        props.updateCountryThunk(props.countryIdText, props.countryNameText);
        props.clearInput();
        setUpdateCountryModal(!updateCountryModal);
    }
    let addCountryButton = <AddCountryButton toggleAddShow={toggleAddShow} onCountryNameChange={onCountryNameChange}
        countryNameText={props.countryNameText} addCountry={addCountry} />
    let updateCountryButton = <UpdateCountryButton onCountryNameChange={onCountryNameChange}
        onCountryIdChange={onCountryIdChange} countryIdText={props.countryIdText}
        countryNameText={props.countryNameText} toggleUpdateShow={toggleUpdateShow} updateCountry={updateCountry} />
    let searchCountryButton = <SearchCountryModal {...props} toggleSearchShow={toggleSearchShow}
        toggleSearchClose={toggleSearchClose} onDeleteCountry={onDeleteCountry} />
    let citiesModal = <CitiesModal {...props} toggleClose={toggleClose} />
    let countriesRow = [];

    if (props.countries) {
        for (let i = 0; i < props.countries.length; i++) {
            let id = [];
            id.push(props.countries[i].id)
            countriesRow.push(<tr key={id}><td><h6 className="fw-bold">{props.countries[i].name}</h6>
                <p className="fst-italic">{id}</p></td><td><MDBBtn size='sm' outline
                    onClick={() => toggleShow(id)}>Cities</MDBBtn></td><td><MDBBtn outline size='sm' color='danger'
                        onClick={() => onDeleteCountry(id)}>Delete</MDBBtn></td></tr>)
        }
    }
    return (
        <MDBContainer fluid className='d-block'>
            <MDBCard className='mt-4'>
                <MDBCardBody>
                    <MDBCardTitle className='text-center'> <p className='fs-2'>LOCATION MANAGEMENT</p></MDBCardTitle>
                    {props.isFetching ? <div className='text-center'><MDBSpinner color='primary'>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner></div> : <MDBContainer breakpoint="sm">
                        <MDBTable hover className='caption-top'>
                            <caption className='d-flex justify-content-around'>
                                <MDBBtn outline color='success' size='sm' onClick={toggleAddShow}>ADD NEW COUNTRY</MDBBtn>
                                <MDBBtn outline color='warning' size='sm' onClick={toggleUpdateShow}>UPDATE COUNTRY NAME</MDBBtn>
                                <div className='d-flex '>
                                    <MDBInput label='Enter country ID' type='text' className='me-3' onChange={onCountryIdChange}
                                        value={props.countryIdText} />
                                    {props.countryIdText ? <MDBBtn outline color='secondary' size='sm' className='ps-3'
                                        onClick={toggleSearchShow}>SEARCH COUNTRY BY ID</MDBBtn> :
                                        <MDBBtn outline color='secondary' size='sm' className='ps-3' disabled>SEARCH COUNTRY BY ID</MDBBtn>}
                                </div>
                                <MDBModal show={addCountryModal} setShow={setAddCountryModal} tabIndex='-1'>
                                    {addCountryButton}
                                </MDBModal>
                                <MDBModal show={updateCountryModal} setShow={setUpdateCountryModal} tabIndex='-1'>
                                    {updateCountryButton}
                                </MDBModal>
                                <MDBModal show={searchCountryModal} setShow={setSearchCountryModal} tabIndex='-1'>
                                    {searchCountryButton}
                                </MDBModal>
                            </caption>
                            <MDBTableBody>
                                {countriesRow}
                                <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                                    {citiesModal}
                                </MDBModal>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBContainer>}
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default AdminPage;