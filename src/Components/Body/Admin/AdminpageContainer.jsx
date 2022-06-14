import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { isAuthCheck } from '../../../redux/auth-reducer';
import AdminPage from './AdminPage';
import {getCountriesThunk} from '../../../redux/admin-reducer';


const AdminpageContainer = (props) => {
    useEffect(() => {
        props.getCountriesThunk();
      }, []);

    return (
        <AdminPage {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        user: state.authReducer.user,
        isFetching: state.adminReducer.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthCheck: () => dispatch(isAuthCheck()),
        getCountriesThunk: () => dispatch(getCountriesThunk()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminpageContainer);