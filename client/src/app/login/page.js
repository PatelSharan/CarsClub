import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            LOG IN
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" name="email" id="email" class="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" placeholder="name@mail.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="sm:text-sm  border shadow-sm focus:border-blue-600 w-full p-2.5" required="" />
                            </div>
                            <button type="submit" class="MainBtn w-full">Log In</button>
                            <div class="flex items-center justify-between">
                                <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
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