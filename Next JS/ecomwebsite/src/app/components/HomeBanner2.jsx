"use client"
import React from 'react'

export default function HomeBanner2() {
  return (
    <section className='relative'>
      <div 
        className='w-full h-[500px] bg-[url("https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg")] bg-cover bg-[50%_center] bg-no-repeat mt-6'
      >
      </div>

      <div className='max-w-[660px] absolute top-1/3 left-1/8 hover:scale-110 origin-right duration-300'>
        <h2 className='text-[48px] font-bold'>New Trending Collection</h2>
        <p className='text-[16px] text-[#5a5a5a]'>We Believe That Good Design is Always in Season</p>
        <button className='text-[13px] text-[#c09578] border-2 border-[#c09578] mt-[70px] cursor-pointer font-bold px-8 py-3 hover:bg-[#c09578] hover:text-[white] duration-300'>SHOPPING NOW</button>
      </div>
    </section>
  )
}
