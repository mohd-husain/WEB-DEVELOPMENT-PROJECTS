import React, { useContext } from 'react'
import { cartContext } from '../Maincontext'

export default function Home() {

    let {cart, setCart} = useContext(cartContext)

    return (
        <div>
            <div className='max-w-[1320px] mx-auto'>
                <h1 className='font-bold text-3xl mb-5'>Home Page</h1>
                <button className='text-center text-2xl font-bold bg-red-400 py-2 px-3 rounded text-white' onClick={() => setCart(cart >=1 ? cart-1 : '')}>Remove from Cart</button>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    Welcome to <span className="font-bold text-blue-600 dark:text-pink-400">MyBrand</span>! 
                    Discover a world where creativity meets technology. Our platform is designed to empower you with seamless experiences, vibrant designs, and innovative solutions. 
                    Whether you're exploring our services or connecting with our team, we promise a journey filled with inspiration and excellence. 
                    <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Let’s build something amazing together!</span>
                </p>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    At <span className="font-bold text-blue-600 dark:text-pink-400">MyBrand</span>, we believe in the power of collaboration and innovation. 
                    Our dedicated team works tirelessly to bring your ideas to life, ensuring every detail reflects your vision. 
                    Experience the difference with our personalized approach and commitment to quality.
                    <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Your success is our inspiration!</span>
                </p>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    Explore our wide range of services tailored to meet your unique needs. 
                    From creative design to robust development, we offer solutions that drive results and exceed expectations. 
                    Join our community and unlock endless possibilities for growth and achievement.
                    <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Together, we shape the future!</span>
                </p>
                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    Thank you for choosing <span className="font-bold text-blue-600 dark:text-pink-400">MyBrand</span>. 
                    We are excited to embark on this journey with you and look forward to creating memorable experiences. 
                    Stay connected for updates, inspiration, and new opportunities.
                    <span className="block mt-2 font-semibold text-purple-600 dark:text-pink-400">Welcome to the family!</span>
                </p>
            </div>
        </div>
    )
}
