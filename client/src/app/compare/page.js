'use client'
import React from 'react';
import Image from 'next/image';
import G63 from '../../Images/G63.jpg';
import { useState } from 'react';

const Page = () => {

    const [showAddCar, setShowAddCar] = useState()

    return (
        <div className='mt-4'>
            <table className='max-w-[100%] min-w-[100%] text-center shadow-md border mx-auto mb-10'>
                <thead>
                    <tr className='bg-black text-white text-lg sticky top-14'>
                        <th className='border-r w-[20%]'>Basic Information</th>
                        <th className='text-center'>Car 1</th>
                        <th className='text-center'>Car 2</th>
                        <th className='text-center'>Car 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='even:bg-gray-10 odd:bg-white'>
                        <td className='border-r font-semibold p-2 text-center'>Image</td>
                        <td className='text-center p-2'>
                            <div className='flex justify-center items-center'>
                                <Image src={G63} width={200} height={200} alt={'Car\'s image '} />
                            </div>
                        </td>
                        <td className='text-center p-2'>
                            <div className='flex justify-center items-center'>
                                <Image src={G63} width={200} height={200} alt={'Car\'s image '} />
                            </div>
                        </td>
                        <td className='text-center p-2'>
                            <div className='flex justify-center items-center bg-gray-200 h-20 rounded-lg cursor-pointer' onClick={() => { setShowAddCar(true) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className='even:bg-gray-100 odd:bg-white'>
                        <td className='border-r p-1'>Model</td>
                        <td>First</td>
                        <td>First1</td>
                    </tr>
                    <tr className='even:bg-gray-100 odd:bg-white'>
                        <td className='border-r p-1'>Model</td>
                        <td>First</td>
                        <td>First1</td>
                    </tr>
                    <tr className='even:bg-gray-100 odd:bg-white'>
                        <td className='border-r p-1'>Model</td>
                        <td>First</td>
                        <td>First1</td>
                    </tr>
                </tbody>
            </table>
            {showAddCar &&
                <div className='h-[100vh] w-[100vw] bg-transparent backdrop-blur-md fixed top-0 right-0 flex justify-center items-center'>
                    <div className='bg-white w-[70vw] h-[70vh] shadow-md border rounded-xl relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" viewBox="0 0 16 16" className='absolute top-1 right-1 cursor-pointer text-gray-400 hover:text-black' onClick={() => { setShowAddCar(false) }}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                        <div className='w-full text-center mt-3'>
                            <input type="text" placeholder='Search Here' className='h-8 w-[80%] rounded-full p-3 border ' />
                        </div>
                        <div className='px-3'>
                            <div className='my-4 m-auto text-sm'>
                                <div className='border shadow-lg w-44 rounded-lg overflow-hidden'>
                                    <div className='h-[50%]'>
                                        <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                    </div>
                                    <div className='p-4'>
                                        <h1><span className='font-semibold text-sm'>Car Name : </span><span>G63</span></h1>
                                        <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                        <div className='flex justify-center mt-5'>
                                            <button className='MainBtnBlack w-40'>Add Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div >
    );
};

export default Page;