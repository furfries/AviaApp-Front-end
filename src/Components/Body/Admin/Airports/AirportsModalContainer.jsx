import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import AddAirportButton from './AddAirportButton/AddCountryButton/AddAirportButton';
import UpdateAirportButton from './UpdateAirportModal/UpdateAirportButton';
import AirportsModal from './AirportsModal';
import DeleteAirportModal from './DeleteAirportButton/DeleteAirportModal';
import { addAirportThunk, deleteAirportThunk, getAirportsThunk, setCurrentAirportName, updateAirportName, updateAirportThunk }
    from '../../../../redux/admin-reducer';

const AirportsModalContainer = (props) => {
    const [addAirportModal, setAddAirportModal] = useState(false);
    const [airportId, setAirportId] = useState('')
    const [airportName, setAirportName] = useState('')
    const [updateAirportModal, setUpdateAirportModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const toggleAddShow = () => {
        setAddAirportModal(!addAirportModal);
        props.clearInput();
    }

    const toggleUpdateShow = (airportId, airportName) => {
        setUpdateAirportModal(!updateAirportModal);
        setAirportId(airportId)
        props.setCurrentAirportName(airportName)
    }

    const toggleUpdateClose = () => {
        setUpdateAirportModal(!updateAirportModal);
        props.clearInput();
    }

    const toggleDeleteShow = (airportId, airportName) => {
        setDeleteModal(!deleteModal);
        setAirportId(airportId)
        setAirportName(airportName)
    }

    const onAirportNameChange = (e) => {
        props.updateAirportName(e.target.value = e.target.value.replace(/[^A-Za-z]/ig, ''))
    }

    const addAirport = () => {
        props.addAirportThunk(props.cityId, props.airportNameText);
        setAddAirportModal(!addAirportModal);
        props.clearInput();
    }

    const onDeleteAirport = () => {
        props.deleteAirportThunk(airportId, props.cityId);
        setDeleteModal(!deleteModal);
    }

    const updateAirport = () => {
        props.updateAirportThunk(airportId, props.airportNameText, props.cityId);
        setUpdateAirportModal(!updateAirportModal);
        props.clearInput();
    }

    let airportsRow = props.airports.map((airport, index) => {
        return (
            <tr key={index}>
                <td>
                    <h6 className='fw-bold'>{airport.name}</h6>
                </td>
                <td>
                    <MDBBtn outline color='warning' size='sm' onClick={() => toggleUpdateShow(airport.id, airport.name)}>
                        Update
                    </MDBBtn>
                </td>
                <td>
                    <MDBBtn outline size='sm' color='danger'
                        onClick={() => toggleDeleteShow(airport.id, airport.name)}>Delete
                    </MDBBtn>
                </td>
            </tr>
        )
    })

    if (props.airports.length == 0) {
        airportsRow = (
            <tr key={0}>
                <td>
                    <p className='text-center'>NONE</p>
                </td>
            </tr>
        );
    }

    if (props.isAirportsFetchingFailed) {
        airportsRow = (
            <tr key={0}>
                <td>
                    <p className='text-center text-danger'>{props.errors}</p>
                </td>
            </tr>
        );
    }

    let addAirportButton = <AddAirportButton {...props}
        onAirportNameChange={onAirportNameChange}
        toggleAddShow={toggleAddShow}
        addAirport={addAirport}
    />

    let updateAirportButton = <UpdateAirportButton {...props}
        onAirportNameChange={onAirportNameChange}
        updateAirport={updateAirport}
        toggleUpdateShow={toggleUpdateShow}
        toggleUpdateClose={toggleUpdateClose}
    />

    let deleteAirportButton = <DeleteAirportModal {...props}
        toggleDeleteShow={toggleDeleteShow}
        onDeleteAirport={onDeleteAirport}
        airportName={airportName}
    />

    return (
        <AirportsModal {...props}
            addAirportModal={addAirportModal}
            airportsRow={airportsRow}
            setAddAirportModal={setAddAirportModal}
            updateAirportModal={updateAirportModal}
            setUpdateAirportModal={setUpdateAirportModal}
            addAirport={addAirport}
            onDeleteAirport={onDeleteAirport}
            updateAirport={updateAirport}
            toggleAddShow={toggleAddShow}
            toggleUpdateShow={toggleUpdateShow}
            addAirportButton={addAirportButton}
            updateAirportButton={updateAirportButton}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            deleteAirportButton={deleteAirportButton}
        />
    );
}


const mapStateToProps = (state) => {
    return {
        airports: state.adminReducer.airports,
        airportName: state.adminReducer.airportName,
        airportNameText: state.adminReducer.airportNameText,
        errors: state.adminReducer.errors,
        isAirportsFetching: state.adminReducer.isAirportsFetching,
        isAirportsFetchingFailed: state.adminReducer.isAirportsFetchingFailed,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAirportsThunk: (cityId) => dispatch(getAirportsThunk(cityId)),
        addAirportThunk: (cityId, airportName) => dispatch(addAirportThunk(cityId, airportName)),
        updateAirportName: (airportName) => dispatch(updateAirportName(airportName)),
        deleteAirportThunk: (airportId, cityId) => dispatch(deleteAirportThunk(airportId, cityId)),
        updateAirportThunk: (updatedAirportName, airportId, cityId) => dispatch(updateAirportThunk(updatedAirportName, airportId, cityId)),
        setCurrentAirportName: (airportNameText) => dispatch(setCurrentAirportName(airportNameText)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AirportsModalContainer);
