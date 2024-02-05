'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <nav className='flex border-b h-14 items-center justify-between px-7 top-0 bg-white w-full z-50'>

                {/* Logo Part */}
                <div>
                    <Link href={'/'} className='hover:text-black text-2xl font-semibold decoration-black</li>'>CarsClub</Link>
                </div>

                {/* Main Navbar */}
                <ul className='flex text-gray-500 text-sm items-center '>
                    <li className='mr-4'>
                        <Link href={'/'} className='hover:text-black'>Home</Link>
                    </li>
                    <li className='mr-4'>
                        <Link href={'/screener'} className='hover:text-black'>Screener</Link>
                    </li>
                    <li className='mr-4'>
                        <Link href={'/compare'} className='hover:text-black'>Compare</Link>
                    </li>

                    {/* Buttons Part */}
                    <div className='flex'>
                        <li className='mr-3'>
                            <Link href={'/login'}>
                                <button className='MainBtn'>Login</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/signup'}>
                                <button className='MainBtn'>Sign Up</button>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav >
        </>
    )
}

export default Navbar