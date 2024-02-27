import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home';
import About from './About';
import Hooks from './Hooks';
// import FunCompRoutes from './FunctionCompo/FunCompRoutes';


const FunCompRoutes = React.lazy(() => import('./FunctionCompo/FunCompRoutes'))

const MainRouter = createBrowserRouter ([
{
    path : '/',
    element : <><Header /><Home /></>
},
{
    path : '/about',
    element : <><Header /><About /></>
},
{
    path : '/hooks',
    element : <><Header /><Hooks /></>,
    children : [
        {
            path : 'FunctionCompo/*',
            element : <Suspense fallback={<h1>Loading ....</h1>}><FunCompRoutes /></Suspense>
        }
    ]
}
])

export default MainRouter;