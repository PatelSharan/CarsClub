'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link'


const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <nav className='bg-white border-b h-14 w-full z-10 top-0 flex items-center sticky'>
            <ul className='flex'>

                {/* To open Navbar */}
                <div className='ml-3 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
                    {/* Menu Svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <title>Open Navbar</title>
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>

                {/*<---- Responsive Navbar */}
                {showNavbar && <div className='fixed w-[100vw] h-[100vh] top-0 left-0 z-10' onClick={() => setShowNavbar(false)}>
                    <div className='fixed top-0 left-0 z-10'>
                        <div className='w-64 h-[100vh] bg-black shadow-md flex flex-col items-center p-2'>
                            <div className='mt-7 w-[100%] space-y-2 text-gray-400'>
                                <li className='text-center'>
                                    <Link href={'/'}>
                                        <button className='text-gray-300 text-2xl mb-4 hover:text-white'>CarsClub</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <button className={`w-[100%] py-1 mb-2 px-3 text-left flex hover:text-white`}
                                        >
                                            <span className='ml-4'>Home</span>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/screener'}>
                                        <button className={`w-[100%] py-1 mb-2 px-3 text-left flex hover:text-white`}
                                        >
                                            <span className='ml-4'>Screener</span>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/compare'}>
                                        <button className={`w-[100%] py-1 mb-2 px-3 text-left flex hover:text-white`}
                                        >
                                            <span className='ml-4'>Compare</span>
                                        </button>
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>}

                {/* If User not Login */}
                <div className='absolute right-3 space-x-3'>
                    <Link href={'/login'}>
                        <button className='MainBtnBlack'>Login</button>
                    </Link>
                    <Link href={'/signup'} >
                        <button className='MainBtnBlack'>SignUp</button>
                    </Link>
                </div>

            </ul >
        </nav >
    )
}

export default Navbar