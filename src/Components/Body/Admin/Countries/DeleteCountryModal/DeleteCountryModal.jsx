import React from 'react';
import {
    MDBBtn,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

const DeleteCountryModal = (props) => {
    return (
        <>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>

                        <MDBModalTitle>Delete '{props.countryName}'</MDBModalTitle>

                        <MDBBtn className='btn-close' color='none' onClick={props.toggleDeleteShow}></MDBBtn>

                    </MDBModalHeader>
                    <MDBModalBody>

                        <h6 className='text-center'>
                            Are you sure you want to delete '{props.countryName}'?
                        </h6>

                    </MDBModalBody>
                    <MDBModalFooter>

                        <MDBBtn color='secondary' outline size='sm' onClick={props.toggleDeleteShow}>
                            Close
                        </MDBBtn>

                        <MDBBtn color='danger' outline size='sm' onClick={props.onDeleteCountry}>Delete</MDBBtn>

                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </>
    );
}

export default DeleteCountryModal;