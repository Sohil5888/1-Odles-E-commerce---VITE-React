import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const LoginMenu = () => {
    return ( 
        <>
            {/* <div className="container mx-auto">
                <h1 className='text-center  text-3xl'>THis is Login Menu Page</h1>
            </div> */}
            <ul>
                <li><NavLink to='userlogin'>1. Login</NavLink></li>
                <li><NavLink to='userregister'></NavLink></li>
            </ul>
            <Outlet />
        </>
     );
}
 
export default LoginMenu;