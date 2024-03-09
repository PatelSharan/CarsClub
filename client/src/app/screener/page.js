import React from 'react'
import Image from 'next/image';
import G63 from '../../Images/G63.jpg'


const page = () => {
    return (
        <>
            <div className='flex'>
                {/* screener part */}
                <div className='min-h-[100vh] w-[30%] p-3 border-r'>
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

                {/* cars part after filter */}
                <div className='min-h-[100vh] w-[70%] px-4'>
                    <div>
                        <h1 className='mt-2 text-gray-500'>Cars Which FullFill Your Needs</h1>
                    </div>

                    {/* cars Part */}
                    <div className='grid grid-cols-3'>
                        {/* car Box */}
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2'>
                            <div className='border shadow-lg min-w-60 rounded-lg overflow-hidden'>
                                <div className='h-[50%]'>
                                    <Image src={G63} alt='Image' width={100} height={100} layout='responsive' className=" max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                                </div>
                                <div className='p-4'>
                                    <h1><span className='font-semibold text-lg'>Car Name : </span><span>G63</span></h1>
                                    <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                                    <div className='flex justify-center mt-5'>
                                        <button className='MainBtnBlack w-40'>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page