import React from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'


export default function Layout() {
    return (
        <>
            <Header />

            <div className='m-5'>
                <p className="text-sm text-gray-500 mb-2">
                    Home / Clothing / <span className="font-bold text-black">Men T-shirts</span>
                </p>
                <h2 className="text-sm font-bold mb-1">
                    Men T-shirts <span className="text-gray-400 text-sm font-normal">- 126446 items</span>
                </h2>

                <div className="text-sm flex items-center my-4 gap-10">
                    <button className="font-bold cursor-pointer">FILTERS</button>
                    <button className="text-sm text-pink-500 font-semibold cursor-pointer">CLEAR ALL</button>
                </div>
            </div>

            {/* <div className='grid grid-cols-[15%_auto]'> */}
                <aside className='border-2'>
                    <Sidebar />
                </aside>
                <div className='p-4'>
                    <Outlet />
                </div>
            {/* </div> */}
        </>
    )
}
