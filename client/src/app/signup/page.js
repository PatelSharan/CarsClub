'use client'
import React, { useState } from 'react';
import { Router, useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUpPage = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/registeruser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setMessage('Registration Successful!');
            setTimeout(() => {
                setMessage('')
            }, 2000);
            router.push('/');
            setFormData({ name: '', email: '', password: '' }); // Clear form fields

        } catch (error) {
            console.error('Error signing up:', error);
            setErrorMessage('Please Fill Details Properly !');
            setTimeout(() => {
                setErrorMessage('')
            }, 2000);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            SIGN UP
                        </h1>
                        {message && <p className="text-green-500 font-semibold">{message}</p>}
                        {errorMessage && <p className="text-red-500 font-semibold">{errorMessage}</p>}
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                                <input type="text" name="name" id="name" className="sm:text-sm border shadow-sm focus:border-blue-600 w-full p-2.5" placeholder="Your Name" required="" value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" name="email" id="email" className="sm:text-sm border shadow-sm focus:border-blue-600 w-full p-2.5" placeholder="name@mail.com" required="" value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="sm:text-sm border shadow-sm focus:border-blue-600 w-full p-2.5" required="" value={formData.password} onChange={handleChange} />
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
    );
};

export default SignUpPage;
