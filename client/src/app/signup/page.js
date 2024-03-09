import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            SIGN UP
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                <input type="name" name="name" id="name" className="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" placeholder="Your Name" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" name="email" id="email" className="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" placeholder="name@mail.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300 cursor-pointer">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="MainBtnBlack w-full">Sign Up</button>
                            <div>
                                <p className='text-xs'>Already Have An Account? <span className='text-blue-600 font-semibold border-b border-blue-600'><button><Link href={'/login'}>Login</Link></button></span> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page