import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Header from "./Com-Comp/Header";
import Example from "./Example";

const Classcomporoutes = React.lazy(() => import("./Classcompo/Classcomporoutes"))
const Fuctioncomporoutes = React.lazy(() => import("./Fuctioncompo/Fuctioncomporoutes"))


const Mainroutes = createBrowserRouter([
    {
        path: "/",
        element: <><Header/><Home/></>
    },
    {
        path: "/About",
        element: <><Header/><About/></>
    },
    {
        path: "/Product",
        element: <><Header/><Product/></>
    },
    {
        path : "/Example",
        element : <><Header/> <Example/></>,
        children:[
            {
                path: "Classcompo/*",
                element : <Suspense fallback={<h2>Loading.....</h2>}><Classcomporoutes/></Suspense>
              
            },
            {
                path: "Fuctioncompo/*",
                element : <Suspense fallback={<h2>Loading.....</h2>}><Fuctioncomporoutes/></Suspense>
              
            }
        ]

    }

]);

export default Mainroutes

