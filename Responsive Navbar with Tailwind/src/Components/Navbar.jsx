import React, { useEffect, useState } from 'react';
import sunglasses from '../assets/sunglasses.png'
import { HiOutlineSearch } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import './navbar.css'

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navSticky, setNavSticky] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scroll > 0) {
                setNavSticky(true);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, [])



    return (
        <>

            <section className='fixed top-0 right-0 left-0 border-b-8 border-gray-400'>
                <nav className={`bg-gray-300 ${navSticky ? "sticky top-0 right-0 left-0 bg-black" : ""}`}>
                    <div className="container-fluid px-5">
                        <div className="flex justify-between items-center">
                            {/* {Navbar Main Logo} */}
                            <div className='xsm:w-14 md:w-20 lg:w-24 lg:h-20 xl:w-24 md:order-1 lg:order-2 '>
                                <img className='w-full h-full bg-gray-300 border-none bg-transparent' src={sunglasses} alt="" />
                            </div>

                            {/* {Navbar Links for Lg Devices} */}
                            <div className='hidden lg:block lg:order-1 '>
                                <ul className='flex gap-11 lg:text-2xl xl:text-3xl'>
                                    <li><a className='hover:text-red-800 transition-all block overflow-hidden  transform -translate-y-1 hover:translate-y-0 duration-500 ease-in-out' href="#">Home</a></li>
                                    <li><a className='hover:text-red-800 transition-all block overflow-hidden  transform -translate-y-1 hover:translate-y-0 duration-500 ease-in-out' href="#">About</a></li>
                                    <li><a className='hover:text-red-800 transition-all block overflow-hidden  transform -translate-y-1 hover:translate-y-0 duration-500 ease-in-out' href="#">Services</a></li>
                                    <li><a className='hover:text-red-800 transition-all block overflow-hidden  transform -translate-y-1 hover:translate-y-0 duration-500 ease-in-out' href="#">Contact</a></li>
                                </ul>
                            </div>

                            {/* {Input tags for Lg devices} */}
                            <div className='hidden lg:block lg:order-3'>
                                <div className='flex gap-3 items-center'>
                                    <input className='lg:pl-2 xl:pl-4 lg:py-1 xl:py-2 rounded-lg' type="text" placeholder='Search...' />
                                    <HiOutlineSearch className='text-3xl hover:text-red-800' />
                                </div>
                            </div>

                            {/* {Search tags for XSM devices} */}
                            <div className='xsm:block lg:hidden md:order-2'>
                                {/* <input className='pl-4 rounded-lg' type="text" placeholder='Search...'/> */}
                                <button onClick={toggleMenu} className='text-3xl '>
                                    <HiMenu />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>


                {
                    menuOpen && (
                        <div className='xsm:block lg:hidden'>
                            <ul className='lg:text-2xl xl:text-3xl bg-red-400 px-5'>
                                <li><a className='text-white  transition-all block overflow-hidden  transform translate-x-2 hover:translate-x-1 duration-500 ease-in-out' href="#">Home</a></li>
                                <li><a className='text-white  transition-all block overflow-hidden  transform translate-x-2 hover:translate-x-1 duration-500 ease-in-out' href="#">About</a></li>
                                <li><a className='text-white  transition-all block overflow-hidden  transform translate-x-2 hover:translate-x-1 duration-500 ease-in-out' href="#">Services</a></li>
                                <li><a className='text-white  transition-all block overflow-hidden  transform translate-x-2 hover:translate-x-1 duration-500 ease-in-out' href="#">Contact</a></li>
                            </ul>
                        </div>
                    )
                }

            </section>

            <h1 className='text-green-600 text-4xl pb-[1500px]'>NAVBAR 123</h1>
            <h1 className='text-green-600 text-4xl'>{props.name}</h1>

        </>
    );
}

export default Navbar;