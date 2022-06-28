import React from 'react';
import {
    MDBBtn, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody,
    MDBModalFooter, MDBInput
} from 'mdb-react-ui-kit';

const UpdateCountryButton = (props) => {
    return (
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>Update country name</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none' onClick={props.toggleUpdateClose}></MDBBtn>

                </MDBModalHeader>
                <MDBModalBody>

                    <MDBInput label='New country name' type='text' onChange={props.onCountryNameChange}
                        value={props.countryNameText} />

                </MDBModalBody>
                <MDBModalFooter>

                    <MDBBtn outline color='secondary' size='sm' onClick={props.toggleUpdateClose}>
                        Close
                    </MDBBtn>

                    {props.countryNameText ? <MDBBtn outline color='warning' size='sm'
                        onClick={props.updateCountry}>Update</MDBBtn> :
                        <MDBBtn outline color='warning' size='sm' disabled>Update</MDBBtn>}

                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default UpdateCountryButton;