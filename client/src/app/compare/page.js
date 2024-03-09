import React from 'react';
import Image from 'next/image';
import G63 from '../../Images/G63.jpg';

const Page = () => {
    return (
        <div className='mt-5'>
            <table className='max-w-[100%] min-w-[100%] text-center shadow-md border mx-auto mb-10'>
                <thead>
                    <tr className='bg-black text-white text-lg sticky top-14'>
                        <th className='border-r w-[20%]'>Basic Information</th>
                        <th className='text-center'>Car 1</th>
                        <th className='text-center'>Car 2</th>
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
        </div>
    );
};

export default Page;