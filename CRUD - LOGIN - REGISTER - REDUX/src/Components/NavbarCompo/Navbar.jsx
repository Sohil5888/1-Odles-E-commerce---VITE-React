import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarSrcIcon from './NavbarSrcIcon';
import { NavLink, Outlet } from 'react-router-dom';
import NavbarToggleBtn from './NavbarToggleBtn';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleMenu = () => {
        setNavOpen(!navOpen)
    }
    return (
        <>
            <nav className='bg-emerald-50'>
                <div className="container mx-auto xs:px-7 lg:px-2">
                    <div className="flex justify-between text-3xl py-3 font-mono">
                        {/* Navbar main logo */}
                        <div>
                            <NavbarLogo />
                        </div>

                        {/* Navbar links for lg devices */}
                        <div className='hidden lg:block '>
                            <ul className='flex gap-9'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/api'>Api</NavLink></li>
                                <li><NavLink to='/login'>Login</NavLink></li>
                                <li><NavLink to='/admin'>Admin</NavLink></li>
                            </ul>
                        </div>

                        {/* Navbar src icon for lg devices */}
                        <div className='hidden lg:block '>
                            <NavbarSrcIcon />
                        </div>

                        {/* Navbar toggle menu for sm devices */}
                        <div className='sm:block lg:hidden'>
                            <button onClick={toggleMenu}>
                                <NavbarToggleBtn />
                            </button>
                        </div>
                    </div>
                    {
                        navOpen &&
                        <div className='sm:block lg:hidden '>
                            <ul className='text-xl'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/api'>Api</NavLink></li>
                                <li><NavLink to='/login'>Login</NavLink></li>
                            </ul>
                        </div>
                    }
                </div>
                {/* <Outlet /> */}
            </nav>
        </>
    );
}

export default Navbar;