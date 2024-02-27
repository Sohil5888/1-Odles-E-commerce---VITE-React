import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Navbar from './Components/NavbarCompo/Navbar';
import Api from './Api';
import Login from './Login';
import Admin from './Admin';

const UserRoutes = React.lazy(() => import('./Components/ApiCopmo/UserRoutes'))
const LoginRoutes = React.lazy(() => import('./Components/LoginCompo/LoginRoutes'))

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <><Navbar /><Home /></>
    },
    {
        path: '/api',
        element: <><Navbar /><Api /></>,
        children: [
            {
                path: 'Components/ApiCopmo/*',
                element: <Suspense fallback={<h1>Loading.....</h1>}><UserRoutes /></Suspense>
            }
        ]
    },
    {
        path: '/login',
        element: <><Navbar /><Login /></>,
        children : [
            {
                path : 'Components/LoginCompo/*',
                element: <Suspense fallback={<h1>Loading....</h1>}><LoginRoutes /></Suspense>
            }
        ]
    },
    {
        path : '/admin',
        element : <><Navbar /><Admin /></>
    }
])    
export default MainRouter;