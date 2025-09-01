import React from 'react'
import { FaSearch, FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
    return (
        <header>
            {/* Top Bar */}
            <div className='border-b border-[#ccc] w-full'>
                <div className='max-w-[1320px] mx-auto text-[14px] flex justify-between py-3'>
                    <div>Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</div>
                    <div>Login / Register</div>
                </div>
            </div>

            {/* Logo + Right Section */}
            <div className='border-b border-[#ccc]'>
                <div className='max-w-[1320px] mx-auto flex justify-between py-5 relative '>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" width={150} />
                    </div>

                    <div className='flex items-center gap-4'>
                        <form className='flex items-center border border-gray-300 w-[280px] max-w-md'>
                            <input type="text" placeholder='Search product...' className='flex-1 px-3 py-3 outline-none text-[12px]' />
                            <button type='submit' className="px-3 py-2 hover:text-[#c09578] duration-300">
                                <FaSearch className='text-[16px]' />
                            </button>
                        </form>

                        <div className="flex items-center justify-center h-[100%] w-[40px] border border-gray-300 cursor-pointer hover:text-[#c09578] duration-300">
                            <FaHeart className='text-[18px]' />
                        </div>

                        <div className="flex items-center justify-center h-[100%] border border-gray-300 cursor-pointer hover:text-[#c09578] duration-300 gap-3 px-3">
                            <IoCart className='text-[18px]'/>
                            <span className='text-[#ccc]'>|</span>
                            <span className='text-[14px] font-bold'>Rs. 0.00</span>
                            <IoIosArrowDown className='font-bold'/>
                        </div>
                    </div>

                    <span className="absolute top-8 right-36 bg-[#c09578] text-white text-[14px] font-semibold h-[20px] w-[20px] flex items-center justify-center rounded-full">
                        0
                    </span>

                </div>
            </div>

            <nav className='max-w-[1320px] mx-auto py-5'>
                <ul className='flex justify-center items-center gap-9 text-[14px] font-bold'>
                    <li className='cursor-pointer text-[#c09578] hover:text-[#5a5a5a]'>HOME</li>
                    <li className='cursor-pointer text-[#5a5a5a] hover:text-[#c09578] duration-200 flex items-center gap-2'>LIVING<MdKeyboardArrowDown className='text-[18px]'/></li>
                    <li className='cursor-pointer text-[#5a5a5a] hover:text-[#c09578] duration-200 flex items-center gap-2'>SOFA<MdKeyboardArrowDown className='text-[18px]'/></li>
                    <li className='cursor-pointer text-[#5a5a5a] hover:text-[#c09578] duration-200 flex items-center gap-2'>PAGES<MdKeyboardArrowDown className='text-[18px]'/></li>
                    <li className='cursor-pointer text-[#5a5a5a] hover:text-[#c09578] duration-200'>CONTACT US</li>
                </ul>
            </nav>
        </header>
    )
}
