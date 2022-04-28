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

const UpdateAirportButton = (props) => {
    return ( 
        <MDBModalDialog>
                 <MDBModalContent>
                   <MDBModalHeader>
                     <MDBModalTitle>Update airport name</MDBModalTitle>
                     <MDBBtn className='btn-close' color='none' onClick={props.toggleUpdateShow}></MDBBtn>
                   </MDBModalHeader>
                   <MDBModalBody>
                   <MDBInput label='Airport ID' type='text' className='mb-3' onChange={props.onAirportIdChange}
                             value={props.airportIdText} /> 
                   <MDBInput label='New airport name' type='text' onChange={props.onAirportNameChange}
                             value={props.airportNameText} /> 
                   </MDBModalBody>
         
                   <MDBModalFooter>
                     <MDBBtn outline color='secondary' size='sm' onClick={props.toggleUpdateShow}>
                       Close
                     </MDBBtn>
                     {(() => {
                            if ( props.airportNameText && props.airportIdText ){
                                return <MDBBtn outline color='warning' size='sm' onClick={props.updateAirport}>Update</MDBBtn>
                            }
                            else return <MDBBtn outline color='warning' size='sm' disabled>Update</MDBBtn>
                            }
                        )()}
                   </MDBModalFooter>
                 </MDBModalContent>
               </MDBModalDialog>
    )
}
export default UpdateAirportButton;