import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBTable, 
  MDBTableBody,
} from 'mdb-react-ui-kit';
import AirportsModal from '../../Airports/AirportsModal';


const SearchCityModal = (props) => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleShow = (cityId) => {
        setOptSmModal(!optSmModal);
        props.getAirportsThunk(cityId);
    }
    const toggleAirportsClose = () => {
        setOptSmModal(!optSmModal);
    }
    const onDeleteCity = (cityId) => {
        props.deleteCityThunk(cityId, props.currentCountryId);
        props.toggleSearchClose();
    }
    let cityRow = [];
    if (props.city) {
            cityRow.push(<tr key={props.city.id}><td><h6 className="fw-bold">{props.city.name}</h6>
            <p className="fst-italic">{props.city.id}</p></td><td><MDBBtn size='sm' outline 
            onClick={() => toggleShow(props.city.id)}>Airports</MDBBtn></td><td><MDBBtn outline size='sm' 
            color='danger' onClick={() => onDeleteCity(props.city.id)}>Delete</MDBBtn></td></tr>)
        }
    if (props.city === null){
        cityRow.push(<tr key={0}><td><p className='text-center'>NOT FOUND</p></td></tr>)
    }
    let airportsModal = <AirportsModal {...props} toggleAirportsClose={toggleAirportsClose}/> 
    return (
        <MDBModalDialog size='xl'>
        <MDBModalContent>
            <MDBModalHeader>
                <MDBModalTitle>Search results</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={props.toggleSearchClose}></MDBBtn>
            </MDBModalHeader>
            <MDBTable hover className='caption-top'>
                <MDBTableBody>
                    {cityRow}
                    <MDBModal show={optSmModal} setShow={setOptSmModal} tabIndex='-2' className='bg-dark'>
                        {airportsModal}
                    </MDBModal>
                </MDBTableBody>
            </MDBTable>
        </MDBModalContent>
    </MDBModalDialog>
    )
}
export default SearchCityModal;