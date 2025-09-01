import React, { useState } from 'react'
import { BiEnvelope, BiEnvelopeOpen, BiUser, BiUserVoice } from 'react-icons/bi';
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import User from '../pages/User';


export default function Sidebar() {

  let [dMenu, setdMenu]=useState(0)


  return (
    <div className='border-1 h-screen overflow-y-scroll'>

      <figure className='py-3 border-b-1'>
        <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" className='mx-auto' alt="" />
      </figure>

      <ul>
        <li>
          <Link to='/dashboard' className='flex items-center gap-2 p-2'>
            <MdSpaceDashboard />
            Dashboard
          </Link>
        </li>
        <li><Link onClick={()=>setdMenu(dMenu==1 ? 0: 1)} className='flex items-center gap-2 p-2'>
        <BiUser/> User {dMenu==1 ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </Link>
          <ul className={`${dMenu==1 ? '' : 'hidden'}`}>
            <li><Link to={'/user'} className='flex items-center gap-2 p-2'> <BiUserVoice/> View User </Link></li>
          </ul>
        </li>

        <li><Link onClick={()=>setdMenu(dMenu==2 ? 0: 2)} className='flex items-center gap-2 p-2'>
        <BiEnvelope/> Enquiry {dMenu==2 ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </Link>
          <ul className={`${dMenu==2 ? '' : 'hidden'}`}>
            <li><Link className='flex items-center gap-2 p-2'> <BiEnvelopeOpen/> Contact Enquiry </Link></li>
            <li><Link className='flex items-center gap-2 p-2'> <BiEnvelopeOpen/> News Letter Enquiry </Link></li>
          </ul>
        </li>
      </ul>

    </div>
  )
}
