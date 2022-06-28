import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getRolesThunk, isAuthCheck, logout} from '../../redux/auth-reducer';
import Header from './Header';
import    { MDBDropdownItem,
MDBDropdownLink,
} from 'mdb-react-ui-kit';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.isAuthCheck();
        if(props.isAuth) {
            props.getRolesThunk();
          }
      }, [props.isAuth]);
    
 //     let dropDown =  <MDBDropdownItem>{props.roles.includes('admin') && <MDBDropdownLink className='text-danger'>Admin dashboard</MDBDropdownLink>}</MDBDropdownItem>
          

    return( 
        <Header {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        email: state.authReducer.email,
        roles: state.authReducer.roles,
        user: state.authReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        isAuthCheck: () => dispatch(isAuthCheck()),
        getRolesThunk: () => dispatch(getRolesThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);