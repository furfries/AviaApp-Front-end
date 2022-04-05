import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const [showBasic, setShowBasic] = useState(false);
    const navigate = useNavigate();
    function logOut() {
        sessionStorage.clear();
        navigate('/login', { replace: true });
    };

    function redirect() {
        if (sessionStorage.getItem('email') === 'admin@xx.xx') {
            return navigate('/adminpage', { replace: true })
        } else {
            return navigate('/userpage', { replace: true })
        }
    }
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <NavLink to={'/main'}> <MDBNavbarBrand>
                    <img
                        src='./logo-transparent4.png'
                        height='30'
                        alt=''
                        loading='lazy'
                    />
                </MDBNavbarBrand> </NavLink>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                Tickets
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Services</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    Information
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>Action</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>Another action</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink>Something else here</MDBDropdownLink>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    {sessionStorage.getItem('avia-app-user') ? (
                        <MDBDropdown>
                            <MDBDropdownToggle>{sessionStorage.getItem('email')}</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <MDBDropdownLink onClick={redirect}>Account</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink onClick={logOut} >Logout</MDBDropdownLink>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>) : (
                        <NavLink to='/login'><MDBBtn >LOGIN</MDBBtn></NavLink>)
                    }     
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Header;