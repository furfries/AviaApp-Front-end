import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
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

const Header = (props) => {
    const [showBasic, setShowBasic] = useState(false);
    const navigate = useNavigate();
    const onLogout = () => {
        props.logout();
        navigate('/login', { replace: true });
    }
    function redirectToAdmin() {
        return navigate('/adminpage', { replace: true })
    }

    function redirectToUser() {
            return navigate('/userpage', { replace: true })
    }

    function itemDrop () {
        if(props.roles) {
            if(props.roles.includes('admin')) {
                return <MDBDropdownLink onClick={redirectToAdmin} className='text-danger'>Admin dashboard</MDBDropdownLink>
            }
            else return null
        }
    }
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
            <NavLink to={'/'}> <div className='pe-4'>
                    <img  
                        src='./logo-transparent4.png'
                        height='35'
                        alt=''
                        loading='lazy'
                    />
                </div> </NavLink>
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
                    {props.isAuth ? (
                        <MDBDropdown>
                            <MDBDropdownToggle>{props.email}</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                {itemDrop()}
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                <MDBDropdownLink onClick={redirectToUser}>Account</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink onClick={onLogout} >Logout</MDBDropdownLink>
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