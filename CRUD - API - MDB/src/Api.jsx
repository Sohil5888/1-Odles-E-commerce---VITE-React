import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Api = () => {
    return ( 
        <>
            <div className="container mx-auto">
                <h1 className='text-3xl text-black text-center bg-green-200'><NavLink to='/api/Compo/APICopmo'>This is Api page</NavLink></h1>
            </div>
            <div>
                <Outlet />
            </div>
        </>
     );
}
 
export default Api;