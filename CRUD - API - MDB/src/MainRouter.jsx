import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Api from './Api';
import Navbar from './Compo/NavbarCompo/Navbar';

const ApiRoutes = React.lazy (() => import('./Compo/APICopmo/ApiRoutes'))

const MainRouter = createBrowserRouter([
    {
        path : '/',
        element : <><Navbar /><Home /></>
    },
    {
        path : '/about',
        element : <><Navbar /><About /></>
    },
    {
        path : '/api',
        element : <><Navbar /><Api /></>,
        children : [
            {
                path : 'Compo/APICopmo/*',
                element : <Suspense fallback={<h1 className='text-xl'>Loading</h1>}><ApiRoutes /></Suspense>
            }
        ]
    }
])
 
export default MainRouter;