import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
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
    MDBCollapse,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




export default function Navbar() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <>
            <div>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setOpenBasic(!openBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar open={openBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        <NavLink to='/'>Home</NavLink>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        <NavLink to='/about'>About</NavLink>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        <NavLink to='/api'>Api</NavLink>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>


                                {/* <MDBNavbarItem>
                            <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                            Dropdown
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                            <MDBDropdownItem link>Action</MDBDropdownItem>
                            <MDBDropdownItem link>Another action</MDBDropdownItem>
                            <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem> */}

                            </MDBNavbarNav>

                            <form className='d-flex input-group w-auto'>
                                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        </>
    );
}