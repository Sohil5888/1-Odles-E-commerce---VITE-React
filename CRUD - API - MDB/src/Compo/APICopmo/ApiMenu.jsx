import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const ApiMenu = () => {
    return ( 
        <>
            <div className="container mx-auto">
                <div >
                    <ul className="flex justify-between items-center text-2xl uppercase text-black">
                        <li><NavLink to='newuser'>New User</NavLink></li>
                        <li><NavLink to='userdata'>User Data</NavLink></li>
                        <li><NavLink to='userdetails/:userID'>User Details</NavLink></li>
                        <li><NavLink to='edituser/:userID'>Edit User</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
     );
}
 
export default ApiMenu;