import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className=''>
                <div className="container mx-auto">
                    <h1 className='text-center bg-green-100 text-3xl'>
                        <NavLink to='/login/Components/LoginCompo'>
                            This is login page
                        </NavLink>
                    </h1>
                    <Outlet />  
                </div>
            </div>
        </>
    );
}

export default Login;