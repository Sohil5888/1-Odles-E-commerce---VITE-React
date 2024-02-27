import React from 'react';
import { Route, Routes } from 'react-router';
import FunCompMenu from './FunCompMenu';
import Intro from './Intro';
import ApiSimple from './ApiSimple';

const FunCompRoutes = () => {
    return ( 
        <>
            <Routes >
                <Route path='/' element={<FunCompMenu />}>
                    <Route path='Intro' element={<Intro />} />
                    <Route path='ApiSimple' element={<ApiSimple />} />
                </Route>
            </Routes>
        </>
     );
}
 
export default FunCompRoutes;