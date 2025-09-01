import React from 'react'
import { FaRegHeart } from "react-icons/fa";


export default function HomeProducts() {
    return (
        <div>
            {/* Button Functionality */}
            <div className='max-w-[1320px] py-6 mx-auto'>
                <div className='flex justify-center items-center'>
                    <button className='border-2 border-[#ccc] px-5 py-2 text-[20px] font-bold hover:text-[#c09578] hover:border-[#c09578] duration-300'>Featured</button>
                    <button className='border-2 border-[#ccc] px-5 py-2 text-[20px] font-bold hover:text-[#c09578] hover:border-[#c09578] duration-300'>New Arrivals</button>
                    <button className='border-2 border-[#ccc] px-5 py-2 text-[20px] font-bold hover:text-[#c09578] hover:border-[#c09578] duration-300'>Onsale</button>
                </div>
            </div>

            {/* Product Image Section */}
            <div className='max-w-[1320px] mx-auto py-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg" alt="" />
                    </div>
                    <div className='text-center'>
                        <h4 className='text-[#5a5a5a] text-[14px] pt-4 cursor-pointer'>Nest of Tables</h4>
                        <h2 className='text-[#242424] text-[16px] pt-2 cursor-pointer font-bold hover:text-[#c09578] duration-300'>Caroline Study Tables</h2>
                        <hr className="my-2 border-1 border-t border-gray-200 w-[80%] mx-auto" />
                        <div className="flex items-end justify-center gap-2 pt-2">
                            <span className="text-gray-500 line-through text-[14px]">Rs. 3,000</span>
                            <span className="text-[#c09578] font-bold">Rs. 2,500</span>
                        </div>
                        <div className='flex justify-center items-center mx-auto mt-3 mb-5 gap-2'>
                            <span className='bg-[#F1F1F1] text-[20px] p-2'><FaRegHeart /></span>
                            <span className='bg-[#F1F1F1] text-[12px] px-3 py-2'>Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
