"use client"
import React from 'react'
import Slider from 'react-slick';


export default function HomeBanner({bannerData}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className='overflow-hidden'>
      <Slider {...settings}>
        {bannerData.map((items, index) => {
            return (
              <div>
                <img src={items.thumbnail} alt="" />
              </div>
            )
        })}
    </Slider>
    </section>
  )
}
