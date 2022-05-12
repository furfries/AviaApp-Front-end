import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import AddAirportButton from './AddAirportButton/AddCountryButton/AddAirportButton';
import UpdateAirportButton from './UpdateAirportModal/UpdateAirportButton';
import AirportsModal from './AirportsModal';

const AirportsModalContainer = (props) => {
    const [addAirportModal, setAddAirportModal] = useState(false);
    const toggleAddShow = () => {
        setAddAirportModal(!addAirportModal);
        props.clearInput();
    }
    const [airportId, setAirportId] = useState('')
    const [updateAirportModal, setUpdateAirportModal] = useState(false);
    const toggleUpdateShow = (airportId) => {
        setUpdateAirportModal(!updateAirportModal);
        setAirportId(airportId)
        props.clearInput();
    }
    const onAirportNameChange = (e) => {
        props.updateAirportName(e.target.value)
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
        props.updateAirportThunk(airportId, props.airportNameText, props.currentCityId);
        setUpdateAirportModal(!updateAirportModal);
        props.clearInput();
    }
    let airportsRow = props.airports.map((airport, index) => {
        return (<tr key={index}><td><h6 className='fw-bold'>{airport.name}</h6></td>
        <td><MDBBtn outline color='warning' size='sm'  onClick={() => toggleUpdateShow(airport.id)}>Update</MDBBtn></td>
        <td><MDBBtn outline size='sm' color='danger' onClick={() => onDeleteAirport(airport.id)}>Delete
        </MDBBtn></td></tr>)
    })
    if (props.airports.length == 0) {
        airportsRow = (<tr key={0}><td><p className='text-center'>NONE</p></td></tr>);
    }
    let addAirportButton = <AddAirportButton {...props} onAirportNameChange={onAirportNameChange}
        toggleAddShow={toggleAddShow} addAirport={addAirport} />
    let updateAirportButton = <UpdateAirportButton {...props} onAirportNameChange={onAirportNameChange}
        updateAirport={updateAirport} toggleUpdateShow={toggleUpdateShow} />
    return (
        <AirportsModal {...props} addAirportModal={addAirportModal} airportsRow={airportsRow} 
        setAddAirportModal={setAddAirportModal} updateAirportModal={updateAirportModal} 
        setUpdateAirportModal={setUpdateAirportModal} addAirport={addAirport} 
        onDeleteAirport={onDeleteAirport} updateAirport={updateAirport} toggleAddShow={toggleAddShow}
        toggleUpdateShow={toggleUpdateShow} addAirportButton={addAirportButton} 
        updateAirportButton={updateAirportButton} /> 
    );
}

export default AirportsModalContainer;