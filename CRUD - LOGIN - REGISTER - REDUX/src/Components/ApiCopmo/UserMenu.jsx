import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const UserMenu = () => {
    return ( 
        <>
            <ul>
                <li><NavLink to='userdata'>1. User Data</NavLink></li>
                <li><NavLink to='newuser'></NavLink></li>
                <li><NavLink to='userdetails/:userID'></NavLink></li>
                <li><NavLink to='edituser/:userID'></NavLink></li>
            </ul>
            <Outlet />
        </>
     );
}
 
export default UserMenu;