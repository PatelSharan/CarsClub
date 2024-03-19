'use client'
import React from 'react'
import Image from 'next/image';
import G63 from '../../Images/G63.jpg'
import { useState } from 'react';
import CarBox from '@/components/CarBox';


const page = () => {

    const [showScreener, setShowScreener] = useState(false)

    const toggleScreener = () => {
        setShowScreener(!showScreener)
    }

    return (
        <>
            {/* Menu Svg */}
            <div className='p-2 flex items-center w-full sticky top-14 z-10 bg-white border-b' title='Toggle Screener'>
                <svg xmlns="http:www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16" className='cursor-pointer' onClick={toggleScreener}>
                    <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>
                {!showScreener ? <h1 className='text-xs ml-1'>Explore Screener</h1> : <h1 className='text-xs ml-1'>Close Screener</h1>}
            </div>
            <div className={`sm:flex `}>
                {/* screener part */}
                {showScreener &&
                    <div className={`min-h-[100vh] min-w-[100vw] sm:min-w-[10%] sm:max-w-[60%] p-3 border-r sticky bg-white sm:static z-10 sm:z-0 top-24`}>
                        <div className='flex items-center justify-between border-b p-2'>
                            <div className='font-bold text-xl'>New Screener</div>
                            <button className='MainBtnBlack p-1'>Save</button>
                        </div>
                        <div className='flex items-center justify-between border-b p-2'>
                            <div className='font-semibold text-sm'>No Filter Applied</div>
                            <button className='MainBtnBlack p-1'>Remove</button>
                        </div>
                        <div className='p-2 mt-2'>
                            <button className='MainBtnBlack p-1 w-full'>+ Add Filter</button>
                        </div>
                        <div className='border-b p-1'>
                            <div className='text-xs text-gray-400'>Added Filter</div>
                        </div>

                        {/* Added Filter Box */}
                        <div className='border-b p-2 py-4'>
                            <div className='flex items-center justify-between'>
                                <div>Price Range (₹ in Lakh)</div>
                                <button className='MainBtnBlack p-1'>Remove</button>
                            </div>
                            <div className='mt-2 flex justify-between w-[80%] m-auto'>
                                <input type="number" className='w-[30%] border shadow p-1' placeholder='From' />
                                <span className='font-semibold'>To</span>
                                <input type="number" className='w-[30%] border shadow p-1' placeholder='To' />
                            </div>
                        </div>
                        <div className='border-b p-2  py-4'>
                            <div className='flex items-center justify-between'>
                                <div>Car Type</div>
                                <button className='MainBtnBlack p-1'>Remove</button>
                            </div>
                            <div className='mt-2 flex justify-between w-[80%] m-auto'>
                                <select name="carType" id="carType" className='w-full border shadow p-1'>
                                    <option value="suv">Suv</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="hatchback">Hatchback</option>
                                </select>
                            </div>
                        </div>
                    </div>
                }


                {/* cars part after filter */}
                <div className='min-h-[100vh] w-[90%] p-2 flex flex-col items-center m-auto'>
                    <div className='text-left w-full'>
                        <h1 className='mt-2 text-gray-500 text-sm '>Cars Which FullFill Your Needs</h1>
                    </div>

                    {/* cars Part */}
                    <div className={`grid ${showScreener ? 'grid-cols-1  lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                        {/* Car Box */}
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                        <CarBox />
                    </div>
                </div>
            </div >
        </>
    )
}

export default page