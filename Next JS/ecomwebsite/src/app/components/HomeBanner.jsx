"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeBanner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className='overflow-hidden'>
                <Slider {...settings}>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="Banner" className='w-full' />
                    </div>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="Banner" className='w-full' />
                    </div>
                </Slider>
            </section>

            <div className='max-w-[1320px] mx-auto grid grid-cols-3 gap-6 py-8'>

                <div className='relative group overflow-hidden'>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" className='group-hover:scale-110 transition duration-300'/>
                    <div className='absolute top-6 left-6'>
                        <p className='text-[15px]'>Design Creative</p>
                        <h3 className='text-[24px] font-bold'>Chair Collection</h3>
                    </div>
                </div>

                <div className='relative group overflow-hidden'>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp" alt="" className='group-hover:scale-110 transition duration-300'/>
                    <div className='absolute top-6 left-6'>
                        <p className='text-[15px]'>Bestselling Products</p>
                        <h3 className='text-[24px] font-bold'>Chair Collection</h3>
                    </div>
                </div>

                <div className='relative group overflow-hidden'>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" className='group-hover:scale-110 transition duration-300'/>
                    <div className='absolute top-6 left-6'>
                        <p className='text-[15px]'>Onsales Products</p>
                        <h3 className='text-[24px] font-bold'>Chair Collection</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
