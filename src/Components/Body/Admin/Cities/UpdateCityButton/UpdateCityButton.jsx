import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput
} from 'mdb-react-ui-kit';

const UpdateCityButton = (props) => {
    return ( 
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                     <MDBModalTitle>Update city name</MDBModalTitle>
                     <MDBBtn className='btn-close' color='none' onClick={props.toggleUpdateShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                   <MDBInput label='New city name' type='text' onChange={props.onCityNameChange}
                             value={props.cityNameText} /> 
                   </MDBModalBody>
                   <MDBModalFooter>
                     <MDBBtn outline color='secondary' size='sm' onClick={props.toggleUpdateShow}>
                       Close
                     </MDBBtn>
                     {props.cityNameText ? <MDBBtn outline color='warning' size='sm' 
                        onClick={props.updateCity}>Update</MDBBtn> : <MDBBtn outline color='warning' 
                        size='sm' disabled>Update</MDBBtn>}
                   </MDBModalFooter>
                 </MDBModalContent>
               </MDBModalDialog>
    )
}
export default UpdateCityButton;