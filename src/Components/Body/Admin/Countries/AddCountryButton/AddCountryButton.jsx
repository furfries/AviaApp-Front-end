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

const AddCountryButton = (props) => {
    return (
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>Add new country</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none' onClick={props.toggleAddShow}></MDBBtn>

                </MDBModalHeader>
                <MDBModalBody>

                    <MDBInput label='Country name' id='form1' type='text' onChange={props.onCountryNameChange}
                        value={props.countryNameText} />

                </MDBModalBody>
                <MDBModalFooter>

                    <MDBBtn outline color='secondary' size='sm' onClick={props.toggleAddShow}>
                        Close
                    </MDBBtn>

                    {props.countryNameText ? <MDBBtn outline color='success' size='sm' onClick={props.addCountry}>Add country</MDBBtn> :
                        <MDBBtn outline color='success' size='sm' disabled>Add country</MDBBtn>}
                        
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default AddCountryButton;