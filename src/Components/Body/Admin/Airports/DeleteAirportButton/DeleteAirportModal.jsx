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
} from 'mdb-react-ui-kit';

const DeleteAirportModal = (props) => {
    return (
        <>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>

                        <MDBModalTitle>Delete '{props.airportName}'</MDBModalTitle>

                        <MDBBtn className='btn-close' color='none' onClick={props.toggleDeleteShow}></MDBBtn>

                    </MDBModalHeader>
                    <MDBModalBody>

                        <h6 className='text-center'>
                            Are you sure you want to delete '{props.airportName}'?
                        </h6>

                    </MDBModalBody>
                    <MDBModalFooter>

                        <MDBBtn color='secondary' outline size='sm' onClick={props.toggleDeleteShow}>
                            Close
                        </MDBBtn>

                        <MDBBtn color='danger' outline size='sm' onClick={props.onDeleteAirport}>Delete</MDBBtn>
                        
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </>
    );
}

export default DeleteAirportModal;