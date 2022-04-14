import React from 'react';
import { connect } from 'react-redux';
import { isAuthCheck } from '../../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import AdminPage from './AdminPage';

class AdminpageContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthCheck()
    }
    render() {
        if (!this.props.isAuth || !this.props.user.roles.includes('admin')) return <Navigate to={'/login'} replace={true} />
        return <AdminPage {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        user: state.authReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isAuthCheck: () => dispatch(isAuthCheck())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminpageContainer);