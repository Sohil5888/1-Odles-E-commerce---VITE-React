import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Hooks = () => {
    return (
        <>
                <h1 className='text-2xl text-center bg-red-300 text-black py-1 items-center'>
                    <NavLink to='/hooks/FunctionCompo'>Hooks</NavLink>
                </h1>
            <div className="container mx-auto">
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Hooks;