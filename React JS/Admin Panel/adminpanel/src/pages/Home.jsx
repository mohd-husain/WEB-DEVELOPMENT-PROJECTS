import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
        <section className='bg-gray-100 flex justify-center items-center h-screen flex-col'>
            <div className='mb-5'>
                <img src="https://wscubetech.com/images/wscube-tech-logo.svg" alt="logo" />
            </div>
            <div className='bg-white p-10 shadow-lg rounded-xl'>
                <h2 className='font-bold text-[24px] mb-3'>Sign in to your account</h2>
                <form>
                    <div className='mb-5 w-[450px]'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" id="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2' placeholder='Enter Email' required />
                    </div>

                    <div className='mb-5 w-[450px]'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input type="password" id="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2' placeholder='Enter Password' required />
                    </div>
                </form>
                <Link to={'/'}>
                <button type='submit' className='center w-[100%] bg-[#1D4ED8] p-3 rounded-xl text-white font-bold cursor-pointer'>Sign In</button>
                </Link>
            </div>
        </section>
    </>
  )
}
