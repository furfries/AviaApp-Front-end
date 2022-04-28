import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBTable, MDBTableBody,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit';
import CitiesModal from '../Cities/CitiesModal';

const SearchCountryModal = (props) => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleShow = (countryId) => {
        setOptSmModal(!optSmModal);
        props.getCitiesThunk(countryId);
    }
    const toggleClose = () => {
        setOptSmModal(!optSmModal);
    }
    const onDeleteCountry = (countryId) => {
        props.deleteCountryThunk(countryId);
        props.toggleSearchClose();
    }
    let citiesModal = <CitiesModal {...props} toggleClose={toggleClose} />
    let countryRow = []
    if (props.country) {
        countryRow.push(<tr key={props.country.id}><td><h6 className="fw-bold">{props.country.name}</h6>
            <p className="fst-italic">{props.country.id}</p></td><td><MDBBtn size='sm' outline
                onClick={() => toggleShow(props.country.id)}>Cities</MDBBtn></td><td><MDBBtn outline size='sm'
                    color='danger' onClick={() => onDeleteCountry(props.country.id)}>Delete</MDBBtn></td></tr>)
    }
    if (props.country === null) {
        countryRow.push(<tr key={0}><td><p className='text-center'>NOT FOUND</p></td></tr>)
    }
    return (
        <MDBModalDialog size='xl'>
            <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>Search results</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={props.toggleSearchClose}></MDBBtn>
                </MDBModalHeader>
                <MDBTable hover className='caption-top'>
                    <MDBTableBody>
                        {countryRow}
                        <MDBModal show={optSmModal} setShow={setOptSmModal} tabIndex='-2' className='bg-dark'>
                            {citiesModal}
                        </MDBModal>
                    </MDBTableBody>
                </MDBTable>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default SearchCountryModal;