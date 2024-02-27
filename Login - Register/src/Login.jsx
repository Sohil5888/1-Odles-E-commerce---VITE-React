import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <nav>
                <div className="conrtainer mx-auto">
                    <h1 className='text-center text-2xl text-black bg-green-100 mb-0'>
                        <NavLink to='/login/Compo/LoginCompo'>This is Login Page</NavLink>
                    </h1>
                </div>
                <Outlet />
            </nav>
        </>
    );
}

export default Login;