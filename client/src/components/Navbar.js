'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className={`bg-white border-b h-14 w-full z-50 top-0 flex items-center sticky ${showNavbar ? 'open' : ''}`}>
            <ul className='flex'>
                {/* To open Navbar */}
                <div className='ml-3 cursor-pointer' onClick={toggleNavbar}>
                    {/* Menu Svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                {/* Responsive Navbar */}
                <div className={`fixed top-0 left-0 z-50 w-64 h-full bg-black shadow-md flex flex-col items-center p-2 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-x-0' : '-translate-x-full'}`} onClick={toggleNavbar}>
                    <div className='mt-2 w-full space-y-2 text-gray-400'>
                        <div className='ml-2 cursor-pointer hover:text-white' onClick={toggleNavbar}>
                            {/* Menu Svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>
                        <li className='text-center'>
                            <Link href={'/'}>
                                <button className='text-gray-300 text-2xl mb-4 hover:text-white'>CarsClub</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <button className={`w-full py-1 mb-2 px-3 text-left flex hover:text-white`}>
                                    <span className='ml-4'>Home</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/screener'}>
                                <button className={`w-full py-1 mb-2 px-3 text-left flex hover:text-white`}>
                                    <span className='ml-4'>Screener</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/compare'}>
                                <button className={`w-full py-1 mb-2 px-3 text-left flex hover:text-white`}>
                                    <span className='ml-4'>Compare</span>
                                </button>
                            </Link>
                        </li>
                    </div>
                </div>



                {/* If User not Login */}
                <div className='absolute right-3 space-x-3'>
                    <Link href={'/login'}>
                        <button className='MainBtnBlack'>Login</button>
                    </Link>
                    <Link href={'/signup'}>
                        <button className='MainBtnBlack'>SignUp</button>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
