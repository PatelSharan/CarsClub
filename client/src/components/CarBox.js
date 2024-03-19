import React from 'react'
import Image from 'next/image';
import G63 from '../Images/G63.jpg'
import porsche_911 from '../Images/porsche_911.jpg'


const CarBox = () => {
    return (
        <>
            <div className='m-2 text-sm sm:text-base'>
                <div className='border shadow-lg h-72 w-48 sm:w-60 rounded overflow-hidden'>
                    <div className='relative min-h-[55%] max-h-[55%] border'>
                        <Image src={porsche_911} alt='Image' layout='fill' objectFit="cover" className="max-w-[100%] max-h-[100%] min-w-[100%] min-h-[100%]"></Image>
                    </div>
                    <div className='p-4'>
                        <h1><span className='font-semibold'>Car Name : </span><span>G63</span></h1>
                        <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
                        <div className='flex justify-center mt-3'>
                            <button className='MainBtnBlack w-40'>View Car</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarBox










// 'use client'


// import React from 'react';
// import Image from 'next/image';
// import porsche_911 from '../Images/porsche_911.jpg';
// import G63 from '../Images/G63.jpg'


// const CarBox = () => {
//     return (
//         <div className='m-2 text-sm sm:text-base'>
//             <div className='border shadow-lg h-60 w-40 sm:w-60 rounded overflow-hidden'>
//                 <div className="relative min-h-[50%] max-h-[50%]">
//                     {/* Check the import path and the image source */}
//                     <Image
//                         src={G63}
//                         alt='Image'
//                         layout='fill'
//                         objectFit='cover'
//                         className="object-cover"
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <h1><span className='font-semibold'>Car Name : </span><span>G63</span></h1>
//                     <h1><span className='font-semibold'>Price : </span><span>1.5cr - 4cr</span></h1>
//                     <div className='flex justify-center mt-3'>
//                         <button className='MainBtnBlack w-40'>View Car</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarBox;
