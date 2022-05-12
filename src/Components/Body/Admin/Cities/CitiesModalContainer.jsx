import React, {useState} from 'react';
import AddCityButton from './AddCityButton.jsx/AddCountryButton/AddCityButton';
import CitiesModal from "./CitiesModal";
import UpdateCityButton from './UpdateCityButton/UpdateCityButton';
import { MDBBtn } from 'mdb-react-ui-kit';
import AirportsModalContainer from '../Airports/AirportsModalContainer';

const CitiesModalContainer = (props) => {
    const [airportsModalPage, setAirportsModal] = useState(false);
    const toggleShow = (cityId) => {
        setAirportsModal(!airportsModalPage);
        props.getAirportsThunk(cityId);
    }
    const toggleAirportsClose = () => setAirportsModal(!airportsModalPage);
    const [addCityModal, setAddCityModal] = useState(false);
    const toggleAddShow = () => {
        setAddCityModal(!addCityModal);
        props.clearInput();
    }
    const [cityId, setCityId] = useState('')
    const [updateCityModal, setUpdateCityModal] = useState(false);
    const toggleUpdateShow = (cityId) => {
        setUpdateCityModal(!updateCityModal);
        setCityId(cityId)
        props.clearInput();
    }
    const onCityNameChange = (e) => {
        props.updateCityName(e.target.value)
    }
    const addCity = () => {
        props.addCityThunk(props.currentCountryId, props.cityNameText);
        setAddCityModal(!addCityModal);
        props.clearInput();
    }
    const onDeleteCity = (cityId) => {
        props.deleteCityThunk(cityId, props.currentCountryId)
    }
    const updateCity = () => {
        props.updateCityThunk(cityId, props.cityNameText, props.currentCountryId);
        setUpdateCityModal(!updateCityModal);
        props.clearInput();
    }
    let citiesRow = props.cities.map((city, index) => {
        return (<tr key={index}><td><h6 className='fw-bold'>{city.name}</h6></td>
        <td><MDBBtn size='sm' outline onClick={() => toggleShow(city.id)}>Airports</MDBBtn></td>
        <td><MDBBtn outline color='warning' size='sm'  onClick={() => toggleUpdateShow(city.id)}>Update</MDBBtn></td>
        <td><MDBBtn outline size='sm'color='danger' onClick={() => onDeleteCity(city.id)}>Delete</MDBBtn></td></tr>)
    })
    if (props.cities.length == 0) {
        citiesRow = (<tr key={0}><td><p className='text-center'>NONE</p></td></tr>);
    }
    let addCityButton = <AddCityButton {...props} toggleShow={toggleAddShow} onCityNameChange={onCityNameChange}
        addCity={addCity} />
    let updateCityButton = <UpdateCityButton {...props} toggleUpdateShow={toggleUpdateShow}
        onCityNameChange={onCityNameChange} updateCity={updateCity} />
    let airportsModal = <AirportsModalContainer {...props} toggleAirportsClose={toggleAirportsClose} />
    return (
        <CitiesModal {...props} citiesRow={citiesRow} airportsModalPage={airportsModalPage} 
        setAirportsModal={setAirportsModal} toggleAirportsClose={toggleAirportsClose}
        addCityModal={addCityModal} setAddCityModal={setAddCityModal} toggleAddShow={toggleAddShow}
        updateCityModal={updateCityModal} setUpdateCityModal={setUpdateCityModal} addCity={addCity}
        onDeleteCity={onDeleteCity} updateCity={updateCity} addCityButton={addCityButton}
        updateCityButton={updateCityButton} airportsModal={airportsModal} 
        toggleUpdateShow={toggleUpdateShow}/>
    )
}

export default CitiesModalContainer;