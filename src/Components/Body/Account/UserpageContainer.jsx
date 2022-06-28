import React from 'react';
import { connect } from 'react-redux';
import { isAuthCheck } from '../../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import UserPage from './UserPage';

class UserpageContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthCheck()
    }
    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'} replace={true} />
        return <UserPage {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        email: state.authReducer.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthCheck: () => dispatch(isAuthCheck())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserpageContainer);