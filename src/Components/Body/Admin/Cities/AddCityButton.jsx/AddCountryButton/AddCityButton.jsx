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

const AddCityButton = (props) => {
    return (
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>Add new city</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none' onClick={props.toggleShow}></MDBBtn>
                    
                </MDBModalHeader>
                <MDBModalBody>

                    <MDBInput label='City name' id='form1' type='text' onChange={props.onCityNameChange}
                        value={props.cityNameText} />

                </MDBModalBody>
                <MDBModalFooter>

                    <MDBBtn outline color='secondary' size='sm' onClick={props.toggleShow}>
                        Close
                    </MDBBtn>

                    {props.cityNameText ? <MDBBtn outline color='success' size='sm' onClick={props.addCity}>Add city</MDBBtn> :
                        <MDBBtn outline color='success' size='sm' disabled>Add city</MDBBtn>}
                        
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    )
}
export default AddCityButton;