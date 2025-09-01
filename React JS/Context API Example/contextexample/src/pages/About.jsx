import React, { useContext } from 'react'
import { cartContext } from '../Maincontext'

export default function About() {

    let {cart, setCart} =useContext(cartContext)

    return (
        <div>
            <div className="max-w-[1320px] mx-auto">
                <h1 className="font-bold text-3xl mb-8 text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text text-center">
                    About Us
                </h1>
                <button className='text-center text-2xl font-bold bg-red-400 py-2 px-3 rounded text-white' onClick={() => setCart(cart+1)}>Add to Cart</button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <div className="bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col justify-center h-full">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                <span className="font-bold text-blue-600 dark:text-pink-400">MyBrand</span> is more than just a name—it's a promise of creativity, innovation, and excellence.
                                Our journey began with a vision to redefine digital experiences and empower individuals and businesses to reach new heights.
                                <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">We believe in making every idea shine!</span>
                            </p>
                            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Our team is a blend of passionate designers, skilled developers, and strategic thinkers.
                                Together, we craft solutions that are not only visually stunning but also highly functional and user-friendly.
                                <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Collaboration is at the heart of everything we do.</span>
                            </p>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div>
                        <div className="bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col justify-center h-full">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                We take pride in our commitment to quality and our drive to exceed expectations.
                                Every project is a new opportunity to innovate, inspire, and deliver results that matter.
                                <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Your dreams fuel our creativity!</span>
                            </p>
                            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Join us on this exciting journey and discover how <span className="font-bold text-blue-600 dark:text-pink-400">MyBrand</span> can help you unlock your true potential.
                                Let’s create something extraordinary together and leave a lasting impact on the world.
                                <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Your story is our inspiration!</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Difference Table Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gradient bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                        Why Choose MyBrand?
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 text-left text-lg font-semibold text-blue-600 dark:text-pink-400 bg-blue-50 dark:bg-gray-800 rounded-tl-xl">Features</th>
                                    <th className="px-6 py-4 text-left text-lg font-semibold text-purple-600 dark:text-blue-400 bg-purple-50 dark:bg-gray-800">MyBrand</th>
                                    <th className="px-6 py-4 text-left text-lg font-semibold text-pink-600 dark:text-purple-400 bg-pink-50 dark:bg-gray-800 rounded-tr-xl">Others</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                                    <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">Creativity & Design</td>
                                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-bold">Exceptional</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Average</td>
                                </tr>
                                <tr className="hover:bg-purple-50 dark:hover:bg-gray-800 transition">
                                    <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">Customer Support</td>
                                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-bold">24/7 Dedicated</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Limited</td>
                                </tr>
                                <tr className="hover:bg-pink-50 dark:hover:bg-gray-800 transition">
                                    <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">Innovation</td>
                                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-bold">Cutting-edge</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Conventional</td>
                                </tr>
                                <tr className="hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                                    <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">Personalization</td>
                                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-bold">Tailored Solutions</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Generic</td>
                                </tr>
                                <tr className="hover:bg-purple-50 dark:hover:bg-gray-800 transition">
                                    <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">Community</td>
                                    <td className="px-6 py-4 text-green-600 dark:text-green-400 font-bold">Inclusive & Supportive</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Basic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
