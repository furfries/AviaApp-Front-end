import {
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle,
    MDBTable, MDBTableBody, MDBSpinner
} from 'mdb-react-ui-kit';

const AirportsModal = (props) => {
    return (
        <MDBModalDialog size='xl'>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>{props.countryName}, {props.cityName}</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none'
                        onClick={props.toggleAirportsClose}>
                    </MDBBtn>

                </MDBModalHeader>
                {props.isAirportsFetching ? <div className='text-center mt-2'><MDBSpinner color='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner></div> :
                    <MDBTable hover className='caption-top'>

                        <caption className='d-flex justify-content-around'>

                            <MDBBtn outline color='success' size='sm' onClick={props.toggleAddShow}>
                                Add new airport
                            </MDBBtn>

                            <MDBModal show={props.addAirportModal} setShow={props.setAddAirportModal}
                                tabIndex='-2' className='bg-dark' >
                                {props.addAirportButton}
                            </MDBModal>

                            <MDBModal show={props.updateAirportModal}
                                setShow={props.setUpdateAirportModal} tabIndex='-2'
                                className='bg-dark'>
                                {props.updateAirportButton}
                            </MDBModal>

                            <MDBModal show={props.deleteModal} setShow={props.setDeleteModal}
                                tabIndex='-2' className='bg-dark'>
                                {props.deleteAirportButton}
                            </MDBModal>

                        </caption>

                        <MDBTableBody>
                            {props.airportsRow}
                        </MDBTableBody>
                        
                    </MDBTable>}
            </MDBModalContent>
        </MDBModalDialog>
    );
}

export default AirportsModal;