import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginMenu from './LoginMenu';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import Admin from './Admin';

const LoginRoutes = () => {
    return ( 
        <>
            {/* <h1>Routes Page</h1> */}
            <Routes >
                <Route path='/' element={<LoginMenu />}>
                    <Route path='userlogin' element={<UserLogin />}/>
                    <Route path='userregister' element={<UserRegister />}/>
                    <Route path='admin' element={<Admin />}/>
                </Route>
            </Routes>
        </>
     );
}
 
export default LoginRoutes;