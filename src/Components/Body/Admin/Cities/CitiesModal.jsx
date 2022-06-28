import {
    MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBTable,
    MDBTableBody, MDBContainer, MDBSpinner
} from 'mdb-react-ui-kit';

const CitiesModal = (props) => {
    return (
        <MDBModalDialog size='xl'>
            <MDBModalContent>
                <MDBModalHeader>

                    <MDBModalTitle>{props.countryName}</MDBModalTitle>

                    <MDBBtn className='btn-close' color='none' onClick={props.toggleClose}></MDBBtn>

                </MDBModalHeader>

                {props.isCitiesFetching ? <div className='text-center mt-2'><MDBSpinner color='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner></div> :
                    <MDBContainer>

                        <MDBTable hover className='caption-top'>

                            <caption className='d-flex justify-content-around'>

                                <MDBBtn outline color='success' size='sm' onClick={props.toggleAddShow}>Add new city</MDBBtn>

                                <MDBModal show={props.addCityModal} setShow={props.setAddCityModal}
                                    tabIndex='-2' className='bg-dark'>
                                    {props.addCityButton}
                                </MDBModal>

                                <MDBModal show={props.updateCityModal} setShow={props.setUpdateCityModal}
                                    tabIndex='-2' className='bg-dark'>
                                    {props.updateCityButton}
                                </MDBModal>

                                <MDBModal show={props.deleteModal} setShow={props.setDeleteModal}
                                    tabIndex='-2' className='bg-dark'>
                                    {props.deleteCityButton}
                                </MDBModal>

                            </caption>

                            <MDBTableBody>
                                {props.citiesRow}
                            </MDBTableBody>

                        </MDBTable>

                        <MDBModal show={props.airportsModalPage} className='bg-dark' tabIndex='-1' setShow={props.setAirportsModal}>
                            {props.airportsModal}
                        </MDBModal>

                    </MDBContainer>}
            </MDBModalContent>
        </MDBModalDialog>
    );
}

export default CitiesModal;