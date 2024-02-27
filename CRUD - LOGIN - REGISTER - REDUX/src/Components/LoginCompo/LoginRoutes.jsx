import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginMenu from './LoginMenu';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

const LoginRoutes = () => {
    return ( 
        <>
            {/* <div className="container mx-auto">
                <h1>THis is Login Routes Page</h1>
            </div> */}
            <Routes >
                <Route path='/' element={<LoginMenu />}>
                    <Route path='userlogin' element={<UserLogin />} />
                    <Route path='userregister' element={<UserRegister />} />
                </Route>
            </Routes>
        </>
     );
}
 
export default LoginRoutes;