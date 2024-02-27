import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserMenu from './UserMenu';
import UserData from './UserData';
import UserDetails from './UserDetails';
import NewUSer from './NewUser';
import EditUser from './EditUser';

const UserRoutes = () => {
    return (
        <>
            {/* <div className="container mx-auto">
                <h1 className='text-center text-3xl'>This is UserRoutes page</h1>
            </div> */}
            <Routes >
                <Route path='/' element={<UserMenu />}>
                    <Route path='userdata' element={<UserData />}/>
                    <Route path='newuser' element={<NewUSer />}/>
                    <Route path='userdetails/:userID' element={<UserDetails />}/>
                    <Route path='edituser/:userID' element={<EditUser />}/>
                </Route>
            </Routes>
        </>
    );
}

export default UserRoutes;