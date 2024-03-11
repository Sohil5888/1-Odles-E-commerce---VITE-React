import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="flex justify-between text-2xl my-2">
                        <div>1</div>


                        <div >
                            <ul className='flex gap-16'>
                                <li><NavLink to='/home'>Home</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                                <li><NavLink to='/user'>User</NavLink></li>
                                <li><NavLink to='/login'>Login</NavLink></li>
                            </ul>
                        </div>


                        <div>3</div>
                    </div>
                <Outlet />
                </div>
                
            </nav>
        </>
    )
}

export default Navbar