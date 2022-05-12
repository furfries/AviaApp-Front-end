import React, { useState } from 'react';
import {
    MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol,
    MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBTable, MDBTableBody,
    MDBModal, MDBSpinner, MDBIcon
} from 'mdb-react-ui-kit';

const AdminPage = (props) => {
    const [verticalActive, setVerticalActive] = useState('tab1');
    const handleVerticalClick = (value = string) => {
        if (value === verticalActive) {
            return;
        }
        setVerticalActive(value);
    };
    return (
        <>
        <MDBContainer fluid className='d-block'>
            <MDBCard className='mt-2'>
                <MDBCardBody>
                    <MDBCardTitle className='text-center text-danger'>
                        <MDBIcon className='me-2' fas icon="user-alt" /> 
                        ADMIN DASHBOARD
                    </MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className='mt-2'>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol size='3'>
                            <MDBTabs pills className='flex-column text-center'>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab1')} 
                                        active={verticalActive === 'tab1'}>
                                            Location Management
                                        <MDBIcon fas icon="map-marker-alt" className='ms-1' />
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab2')} 
                                        active={verticalActive === 'tab2'}>
                                            Users List
                                        <MDBIcon fas icon="users" className='ms-1' />
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleVerticalClick('tab3')} 
                                        active={verticalActive === 'tab3'}>
                                            Blacklist
                                        <MDBIcon fas icon="ban" className='ms-1' />
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </MDBCol>
                        <MDBCol size='9'>
                            <MDBTabsContent>
                                <MDBTabsPane show={verticalActive === 'tab1'}>
                                    {props.isFetching ? <div className='text-center'><MDBSpinner color='primary'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner></div> : <MDBContainer breakpoint="sm">
                                        <MDBTable hover className='caption-top'>
                                            <caption className='d-flex justify-content-around'>
                                                <MDBBtn outline color='success' size='sm' 
                                                    onClick={props.toggleAddShow}>ADD NEW COUNTRY</MDBBtn>
                                                <MDBModal show={props.addCountryModal} 
                                                    setShow={props.setAddCountryModal} tabIndex='-1'>
                                                        {props.addCountryButton}
                                                </MDBModal>
                                                <MDBModal show={props.updateCountryModal} 
                                                    setShow={props.setUpdateCountryModal} tabIndex='-1'>
                                                        {props.updateCountryButton}
                                                </MDBModal>
                                            </caption>
                                            <MDBTableBody>
                                                {props.countriesRow}
                                                <MDBModal show={props.optSmModal} tabIndex='-1' 
                                                    setShow={props.setOptSmModal}>
                                                        {props.citiesModal}
                                                </MDBModal>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBContainer>}
                                </MDBTabsPane>
                                <MDBTabsPane show={verticalActive === 'tab2'}>Users List</MDBTabsPane>
                                <MDBTabsPane show={verticalActive === 'tab3'}>Blacklist</MDBTabsPane>
                            </MDBTabsContent>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    </>
)}

export default AdminPage;