import React, { useContext } from 'react'
import { cartContext } from '../MainContext'
import { Link } from 'react-router-dom'   // 👈 yaha add karna zaruri hai
import { createContext, useState } from "react";


export default function Header() {
  let { cart } = useContext(cartContext)

  return (
    <>
      <div className='p-8 flex justify items-center bg-white shadow-md'>
        <div>
          <img 
            className='h-[40px]' 
            src="https://product-listings.vercel.app/static/media/myntra.23d804112ff164fbba64.png" 
            alt="logo" 
          />
        </div>
        <div>
          <ul className='flex text-[14px] font-semibold gap-8 ml-28'>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            
            <li>
              <Link to="/cart">CART({cart.length})</Link>
            </li>

            <li className='relative'>
              STUDIO
              <span className='text-[10px] font-semibold absolute top-[-6px] right-[-30px]'>
                NEW
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
