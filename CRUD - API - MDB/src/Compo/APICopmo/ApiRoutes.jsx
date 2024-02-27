import React from 'react'
import { Route, Routes } from 'react-router';
import ApiMenu from './ApiMenu';
import UserData from './UserData';
import NewUser from './NewUser';
import UserDetails from './UserDetails';
import EditUser from './EditUser';

const ApiRoutes = () => {
    return (
        <>
            <Routes >
                <Route path='/' element={<ApiMenu />} >
                    <Route path='userdata' element={<UserData />}/>
                    <Route path='newuser' element={<NewUser />}/>
                    <Route path='userdetails/:userID' element={<UserDetails />}/>
                    <Route path='edituser/:userID' element={<EditUser />}/>
                </Route>
            </Routes>
        </>
    );
}

export default ApiRoutes;