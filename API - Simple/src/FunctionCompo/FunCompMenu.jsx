import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const FunCompMenu = () => {
    return ( 
        <>
            <div>
                <ul className='text-center text-xl gap-4'>
                    <li><NavLink to='Intro'>1. Welcome to Intro, Click to Expend</NavLink></li>
                    <li><NavLink to='ApiSimple'>2. Api Simple</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </>
     );
}
 
export default FunCompMenu;