import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            LOG IN
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" name="email" id="email" className="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" placeholder="name@mail.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" required="" />
                            </div>
                            <button type="submit" className="MainBtnBlack w-full">Log In</button>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                            <div>
                                <p className='text-xs'>Do Not Have An Account? <span className='text-blue-600 font-semibold border-b border-blue-600'><button><Link href={'/signup'}>Signup</Link></button></span> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page