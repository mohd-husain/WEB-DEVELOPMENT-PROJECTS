"use client"
import React, { useState } from 'react'

export default function ProductDetailsView({data}) {

    let [mainImage, setMainImage] =useState(data.thumbnail)

    let {images}=data //Multiple Images

  return (
    <div className='max-w-[1320px] mx-auto grid grid-cols-[45%_auto] gap-5 my-5'>
      <div className='border-1 border-[#ccc]'>
        <img width={"100%"} src={mainImage} alt="" />
        <div className='flex gap-3'>
            {
                images.map((src, index) => <img onClick={() => setMainImage(src)} className='mx-auto mb-5 border-1 border-[#ccc]' width={"25%"} src={src} alt="" />)
            }
        </div>
      </div>
    </div>
  )
}
