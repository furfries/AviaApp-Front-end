import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBTable, MDBTableBody, MDBInput
} from 'mdb-react-ui-kit';
import AddAirportButton from './AddAirportButton/AddCountryButton/AddAirportButton';
import SearchAirportModal from './SearchAirportButton/SearchAirportModal';
import UpdateAirportButton from './UpdateAirportModal/UpdateAirportButton';

const AirportsModal = (props) => {
    const [addAirportModal, setAddAirportModal] = useState(false);
    const toggleAddShow = () => {
        setAddAirportModal(!addAirportModal);
        props.clearInput();
    }
    const [searchAirportModal, setSearchAirportModal] = useState(false);
    const toggleSearchShow = () => {
        setSearchAirportModal(!searchAirportModal);
        props.searchAirportThunk(props.airportIdText)
        props.clearInput();
    }
    const toggleSearchClose = () => setSearchAirportModal(!searchAirportModal);
    const [updateAirportModal, setUpdateAirportModal] = useState(false);
    const toggleUpdateShow = () => {
        setUpdateAirportModal(!updateAirportModal);
        props.clearInput();
    }
    const onAirportNameChange = (e) => {
        props.updateAirportName(e.target.value)
    }
    const onAirportIdChange = (e) => {
        props.updateAirportId(e.target.value)
    }
    const addAirport = () => {
        props.addAirportThunk(props.currentCityId, props.airportNameText);
        setAddAirportModal(!addAirportModal);
        props.clearInput();
    }
    const onDeleteAirport = (airportId) => {
        props.deleteAirportThunk(airportId, props.currentCityId)
    }
    const updateAirport = () => {
        props.updateAirportThunk(props.airportIdText, props.airportNameText, props.currentCityId);
        setUpdateAirportModal(!updateAirportModal);
        props.clearInput();
    }
    let airportsRow = [];
    if (props.airports) {
        for (var i = 0; i < props.airports.length; i++) {
            let id = [];
            id.push(props.airports[i].id);
            airportsRow.push(<tr key={id}><td><h6 className="fw-bold">{props.airports[i].name}</h6><p className="fst-italic">
                {props.airports[i].id}</p></td><td><MDBBtn outline size='sm' color='danger'
                    onClick={() => onDeleteAirport(id)}>Delete</MDBBtn></td></tr>)
        }
    }
    if (props.airports.length == 0) {
        airportsRow.push(<tr key={0}><td><p className='text-center'>NONE</p></td></tr>);
    }
    let addAirportButton = <AddAirportButton {...props} onAirportNameChange={onAirportNameChange}
        toggleAddShow={toggleAddShow} addAirport={addAirport} />
    let updateAirportButton = <UpdateAirportButton {...props} onAirportNameChange={onAirportNameChange}
        onAirportIdChange={onAirportIdChange} updateAirport={updateAirport} toggleUpdateShow={toggleUpdateShow} />
    let searchAirportButton = <SearchAirportModal {...props} toggleSearchClose={toggleSearchClose} />
    return (
        <MDBModalDialog size='xl'>
            <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>List of airports</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={props.toggleAirportsClose}></MDBBtn>
                </MDBModalHeader>
                <MDBTable hover className='caption-top'>
                    <caption className='d-flex justify-content-around'>
                        <MDBBtn outline color='success' size='sm' onClick={toggleAddShow}>Add new airport</MDBBtn>
                        {props.airports.length == 0 ? <MDBBtn outline color='warning' size='sm' disabled>
                            Update airport name</MDBBtn> : <MDBBtn outline color='warning' size='sm'
                                onClick={toggleUpdateShow}>Update airport name</MDBBtn>}
                        <div className='d-flex '>
                            {props.airports.length == 0 ? <MDBInput label='Enter airport ID' type='text'
                                className='me-3' disabled /> : <MDBInput label='Enter airport ID' type='text'
                                    className='me-3' onChange={onAirportIdChange} value={props.airportIdText} />}
                            {props.airportIdText ? <MDBBtn outline color='secondary' size='sm' className='ps-3'
                                onClick={toggleSearchShow}>Search airport by ID</MDBBtn> :
                                <MDBBtn outline color='secondary' size='sm' className='ps-3' disabled>
                                    Search airport by ID</MDBBtn>}
                        </div>
                        <MDBModal show={addAirportModal} setShow={setAddAirportModal}
                            tabIndex='-2' className='bg-dark' >
                            {addAirportButton}
                        </MDBModal>
                        <MDBModal show={updateAirportModal} setShow={setUpdateAirportModal}
                            tabIndex='-2' className='bg-dark'>
                            {updateAirportButton}
                        </MDBModal>
                        <MDBModal show={searchAirportModal} setShow={setSearchAirportModal}
                            tabIndex='-2' className='bg-dark'>
                            {searchAirportButton}
                        </MDBModal>
                    </caption>
                    <MDBTableBody>
                        {airportsRow}
                    </MDBTableBody>
                </MDBTable>
            </MDBModalContent>
        </MDBModalDialog>
    );
}

export default AirportsModal;