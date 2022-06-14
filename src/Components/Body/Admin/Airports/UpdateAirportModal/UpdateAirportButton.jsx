import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit';

const UpdateAirportButton = (props) => {
    return (
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>Update airport name</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none' onClick={props.toggleUpdateClose}></MDBBtn>

                </MDBModalHeader>
                <MDBModalBody>

                    <MDBInput label='New airport name' type='text' onChange={props.onAirportNameChange}
                        value={props.airportNameText} />

                </MDBModalBody>

                <MDBModalFooter>

                    <MDBBtn outline color='secondary' size='sm' onClick={props.toggleUpdateClose}>
                        Close
                    </MDBBtn>

                    {props.airportNameText ? <MDBBtn outline color='warning' size='sm'
                        onClick={props.updateAirport}>Update</MDBBtn> : <MDBBtn outline color='warning'
                            size='sm' disabled>Update</MDBBtn>}
                            
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default UpdateAirportButton;