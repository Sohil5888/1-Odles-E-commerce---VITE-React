import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Api = () => {
    return (
        <>
            <div className='bg-white'>
                <div className="container mx-auto">
                    <h1 className='bg-green-100 text-center text-3xl'>
                        <NavLink to='/api/Components/ApiCopmo'>
                            This is api page
                        </NavLink>
                    </h1>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Api;