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

const UpdateCountryButton = (props) => {

    return ( 
        <MDBModalDialog>
                 <MDBModalContent>
                   <MDBModalHeader>
                     <MDBModalTitle>Update country name</MDBModalTitle>
                     <MDBBtn className='btn-close' color='none' onClick={props.toggleUpdateShow}></MDBBtn>
                   </MDBModalHeader>
                   <MDBModalBody>
                   <MDBInput label='Country ID' type='text' className='mb-3' onChange={props.onCountryIdChange}
                             value={props.countryIdText} /> 
                   <MDBInput label='New country name' type='text' onChange={props.onCountryNameChange}
                             value={props.countryNameText} /> 
                   </MDBModalBody>
         
                   <MDBModalFooter>
                     <MDBBtn outline color='secondary' size='sm' onClick={props.toggleUpdateShow}>
                       Close
                     </MDBBtn>
                     {(() => {
                            if (props.countryIdText&&props.countryNameText){
                                return <MDBBtn outline color='warning' size='sm' onClick={props.updateCountry}>Update</MDBBtn>
                            }
                            else return <MDBBtn outline color='warning' size='sm' disabled>Update</MDBBtn>
                            }
                        )()}
                   </MDBModalFooter>
                 </MDBModalContent>
               </MDBModalDialog>
    )
}
export default UpdateCountryButton;