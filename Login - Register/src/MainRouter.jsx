import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Compo/NavbarCompo/Navbar';

const LoginRoutes = React.lazy(() => import('./Compo/LoginCompo/LoginRoutes'))

const MainRouter = createBrowserRouter ([
    {
        path : '/',
        element : <><Navbar /><Home /></>
    },
    {
        path : '/about',
        element : <><Navbar /><About /></>
    },
    {
        path : '/login',
        element : <><Navbar /><Login /></>,
        children : [
            {
                path : 'Compo/LoginCompo/*',
                element : <Suspense fallback={<h1>Loading ...</h1>}><LoginRoutes /></Suspense>
            }
        ]
    }
]) 

 
export default MainRouter;