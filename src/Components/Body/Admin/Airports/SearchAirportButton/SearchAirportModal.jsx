import React from 'react';
import {
    MDBBtn,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBTable, MDBTableBody,
} from 'mdb-react-ui-kit';


const SearchAirportModal = (props) => {
    const onDeleteAirport = (airportId) => {
        props.deleteAirportThunk(airportId, props.currentCityId);
        props.toggleSearchClose();
    }
    let airportRow = [];
    if (props.airport) {
        airportRow.push(<tr key={props.airport.id}><td><h6 className="fw-bold">{props.airport.name}</h6><p className="fst-italic">
            {props.airport.id}</p></td><td onClick={() => onDeleteAirport(props.airport.id)}>
                <MDBBtn outline size='sm' color='danger'>Delete</MDBBtn></td></tr>)
    }
    if (props.airport === null) {
        airportRow.push(<tr key={0}><td><p className='text-center'>NOT FOUND</p></td></tr>)
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
                        {airportRow}
                    </MDBTableBody>
                </MDBTable>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default SearchAirportModal;