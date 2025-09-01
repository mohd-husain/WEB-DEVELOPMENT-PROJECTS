import React from 'react'
import { product } from '../data/productdata'

export default function Home() {
    return (
        <>

            <div className='grid grid-cols-[60%_40%] grid-cols-1'>

                <div>

                    <h1 className='text-[52px] font-bold text-left'>The experience makes <br /> all the difference.</h1>

                    <p className='text-left text-[18px] text-gray-500'>From checkout to global sales tax compliance, companies around the world use <br /> Flowbite to simplify their payment stack.</p>

                    <button className='bg-red-500 px-5 py-2 rounded text-white mt-5 mr-4'>
                        Get started
                    </button>

                    <button className='px-5 py-2 rounded text-black border mt-5'>
                        Offer
                    </button>

                </div>

                <div className='flex justify-center'>

                    <img src="../src/assets/phone-mockup.png" alt="" />

                </div>

            </div>

            <h2 className='lg:text-[38px] font-bold mt-[50px] mb-[40px] sm:text-[20px]'>Shop By Category</h2>

            <div className='grid lg:grid-cols-3 row-3 gap-4 md:grid-cols-2 row-3'>
                <div className='row-span-2 relative'>
                    <img src="../src/assets/women.png" alt="" />
                    <div className='mt-2'>
                        <button className='bg-gray-100 px-6 py-2 bg-white text-black absolute bottom-5 flex item-center left-37'>Women</button>
                    </div>
                </div>

                <div className='row-span-1 w-full h-full object-cover rounded relative'>
                    <img src="../src/assets/shoes.png" alt="Shoes" className="w-full h-full object-cover rounded" />
                    <div className="text-center mt-2">
                        <button className="bg-gray-100 px-4 py-1 rounded shadow-sm absolute bottom-4 left-42 bg-white">Shoes</button>
                    </div>
                </div>

                <div className='row-span-1 w-full h-full object-cover rounded relative'>
                    <img src="../src/assets/shoes.png" alt="Shoes" className="w-full h-full object-cover rounded" />
                    <div className="text-center mt-2">
                        <button className="bg-gray-100 px-4 py-1 rounded shadow-sm absolute bottom-4 left-42 bg-white">Shoes</button>
                    </div>
                </div>


            </div>

            <h2 className='text-[54px] font-bold mt-[50px]'>Get difference Product</h2>

            <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]'>

                {product.map((data, index) => {
                    return (
                        <ProductItems itisprops={data} />
                    )
                })}

            </div>

        </>

    )
}

function ProductItems({ itisprops }) {

    let { title, thumbnail, price, rating, brand, warrantyInformation } = itisprops;

    return (
        <>
            {/* <div className='bg-white border-1 p-2'>
                <img src={itisprops.thumbnail} alt={itisprops.title} />
                <h3 className='text-center py-3'>
                    {itisprops.title}
                </h3>
                <div className='text-red-500'>Rs ₹ {itisprops.price}</div>
                <div>Warranty: {itisprops.warrantyInformation}</div>
                <button className=" bg-blue-600 text-white px-4 rounded" fdprocessedid="w98w1d">ADD</button>
            </div> */}



            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={itisprops.thumbnail} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{itisprops.title}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs. {itisprops.price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>

        </>
    )
}
