import React from 'react';
import {
    MDBBtn,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit';

const AddAirportButton = (props) => {
    return (
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>Add new airport</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none' onClick={props.toggleAddShow}></MDBBtn>

                </MDBModalHeader>
                <MDBModalBody>

                    <MDBInput label='Airport name' id='form1' type='text' onChange={props.onAirportNameChange}
                        value={props.airportNameText} />

                </MDBModalBody>
                <MDBModalFooter>

                    <MDBBtn outline color='secondary' size='sm' onClick={props.toggleAddShow}>Close</MDBBtn>

                    {props.airportNameText ? <MDBBtn outline color='success' size='sm' onClick={props.addAirport}>
                        Add airport</MDBBtn> : <MDBBtn outline color='success' size='sm' disabled>Add airport</MDBBtn>}
                        
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default AddAirportButton;