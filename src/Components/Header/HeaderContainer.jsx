import React from 'react';
import { connect } from 'react-redux';
import { isAuthCheck, logout } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthCheck()
    }

    render() {
        return <Header {...this.props} />
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
        logout: () => dispatch(logout()),
        isAuthCheck: () => dispatch(isAuthCheck())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);