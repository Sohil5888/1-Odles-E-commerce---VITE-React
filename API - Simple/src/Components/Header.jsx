import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderSrcIcon from './HeaderSrcIcon';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <>
            <header>
                <nav>
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center py-5 mb-5">
                            {/* Header Main Logo */}
                            <div>
                                <HeaderLogo />
                            </div>

                            {/* Header Links for lg Devices */}
                            <div className='hidden lg:block'>
                                <div>
                                    <ul className='flex gap-8 font-mono text-3xl'>
                                        <li><NavLink to='/'>Home</NavLink></li>
                                        <li><NavLink to='/about'>About</NavLink></li>
                                        <li><NavLink to='/hooks'>Hooks</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Header Search Icon for lg Devices */}
                            <div>
                                <HeaderSrcIcon />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
     );
}
 
export default Header;