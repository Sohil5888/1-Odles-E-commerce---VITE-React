import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [openNavSecond, setOpenNavSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavSecond(!openNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavSecond}>
                        <MDBNavbarNav>
                            {/* <div className="flex justify-between"> */}
                                {/* <div className='flex justify-between'> */}
                                    <MDBNavbarLink href='#' className='text-2xl'>
                                        <NavLink to='/'>Home</NavLink>
                                    </MDBNavbarLink>
                                    <MDBNavbarLink href='#' className='text-2xl'>
                                        <NavLink to='/about'>About</NavLink>
                                    </MDBNavbarLink>
                                {/* </div> */}
                                {/* <div className='justify-end'> */}
                                    <MDBNavbarLink href='#' className='text-2xl'>
                                        <NavLink to='/login'>Login</NavLink>
                                    </MDBNavbarLink>
                                {/* </div> */}
                            {/* </div> */}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}