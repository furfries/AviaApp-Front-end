import {
    MDBBtn, MDBTable, MDBTableBody,
    MDBModal,
} from 'mdb-react-ui-kit';
import React from 'react';

const Countries = (props) => {
    return (
        <>
            <MDBTable hover className='caption-top'>
                <caption className='d-flex justify-content-around'>
                    
                    <MDBBtn outline color='success' size='sm'
                        onClick={props.toggleAddShow}>ADD NEW COUNTRY
                    </MDBBtn>
                    
                    <MDBModal show={props.addCountryModal}
                        setShow={props.setAddCountryModal} tabIndex='-1'>
                        {props.addCountryButton}
                    </MDBModal>

                    <MDBModal show={props.updateCountryModal}
                        setShow={props.setUpdateCountryModal} tabIndex='-1'>
                        {props.updateCountryButton}
                    </MDBModal>

                    <MDBModal show={props.deleteModal}
                        setShow={props.setDeleteModal} tabIndex='-1'>
                        {props.deleteButton}
                    </MDBModal>

                </caption>
                <MDBTableBody>
                    {props.countriesRow}
                </MDBTableBody>
            </MDBTable>

            <MDBModal show={props.optSmModal} tabIndex='-1'
                setShow={props.setOptSmModal}>
                {props.citiesModal}
            </MDBModal>
        </>
    )
}
export default Countries;