import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const LoginMenu = () => {
    return ( 
        <>
            {/* <h1>Login Page</h1> */}
            <div className='bg-green-100'>
                <ul className='flex justify-around mb-0 uppercase text-black text-2xl'>
                    <li><NavLink to='userlogin'>1. User Login</NavLink></li>
                    <li><NavLink to='userregister'></NavLink></li>
                    <li><NavLink to='admin'></NavLink></li>
                </ul>
            </div>
            <Outlet />
        </>
     );
}
 
export default LoginMenu;