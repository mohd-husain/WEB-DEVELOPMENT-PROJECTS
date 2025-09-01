import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Header from './common/Header.jsx'



function App() {

  let cName = "WsCube Tech";
  let phone = "+91- 84-484-484-4";

  return (
    <>
      <Header
        companyName={cName}
        phone={phone}
      />

      <section className='w-[100%] py-10 bg-lime-300'>
        <h1 className='text-center lg:text-[50px] sm:text-[40px] text-[30px] xl:text-red-800 md:text-blue-800 font-bold py-10'>Our Products</h1>
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]'>

          <div className='bg-white border-2 text-center py-3'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-cat-sitting-outdoors-royalty-free-image-1701438826.jpg?crop=0.66673xw:1xh;center,top&resize=1200:*" alt="" />
            <h3>SANTRA BILLA HAI</h3>
            <button className='flex bg-blue-400 p-3 items-center gap-2 mx-auto mb-3'> Add to Cart <FaCartShopping className='text-yellow-400 text-2xl' /> </button>
          </div>

          <ProductItems title={"Billa Lelo Billa"}/>
          <ProductItems title={"Aisi Ki Taisi Tumhari"}/>
          <ProductItems title={"Main Bhi Changa"}/>
          <ProductItems title={"Mera Bro Bhi Changa"}/>
          <ProductItems title={"Meri Maan Bhi Changi"}/>
          <ProductItems title={"rishterdar pen-chor"}/>


        </div>
      </section>
    </>
  )
}

export default App

function ProductItems({title}) {
  return (
    <div className='bg-white border-2 text-center py-3'>
      <img src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-cat-sitting-outdoors-royalty-free-image-1701438826.jpg?crop=0.66673xw:1xh;center,top&resize=1200:*" alt="" />
      <h3>{title}</h3>
      <button className='flex bg-blue-400 p-3 items-center gap-2 mx-auto mb-3'> Wishlist <FaHeart className='text-red-500 text-2xl' /> </button>
    </div>
  )
}